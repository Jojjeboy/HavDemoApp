import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { Schema } from './schema';
import { getWorkspace } from '@schematics/angular/utility/config';
import {
  Rule,
  SchematicContext,
  mergeWith,
  apply,
  url,
  move,
  forEach,
  chain,
  SchematicsException
} from '@angular-devkit/schematics';
import { Tree, FileEntry } from '@angular-devkit/schematics/src/tree/interface';
import { red, bold, blue } from '@angular-devkit/core/src/terminal';
import {
  appendHtmlElementToHead,
  getProjectMainFile,
  hasNgModuleImport,
  addModuleImportToRootModule,
  getProjectStyleFile,
  getProjectTargetOptions,
  getProjectFromWorkspace
} from '@angular/cdk/schematics/utils';

const browserAnimationsModuleName = 'BrowserAnimationsModule';
const noopAnimationsModuleName = 'NoopAnimationsModule';
const animationsModulePath = '@angular/platform-browser/animations';

export function ngSetupTargetProject(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return chain([
      addAnimationsModule(_options),
      addRobotoFont(_options),
      replaceFavicon(_options)
    ])(tree, _context);
  };
}

function addAnimationsModule(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const project = getProject(tree, _options);
    const appModulePath = getAppModulePath(tree, getProjectMainFile(project));
    if (_options.animations) {
      if (hasNgModuleImport(tree, appModulePath, noopAnimationsModuleName)) {
        return console.warn(
          red(
            `Could not set up "${bold(
              browserAnimationsModuleName
            )}" because "${bold(
              noopAnimationsModuleName
            )}" is already imported. You need to manually set up browser animations.`
          )
        );
      }
      addModuleImportToRootModule(
        tree,
        browserAnimationsModuleName,
        animationsModulePath,
        project
      );
    } else if (
      !hasNgModuleImport(tree, appModulePath, browserAnimationsModuleName)
    ) {
      addModuleImportToRootModule(
        tree,
        noopAnimationsModuleName,
        animationsModulePath,
        project
      );
    }
    return tree;
  };
}

function replaceFavicon(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (_options.favicon) {
      const rule = mergeWith(
        apply(url('./files/favicon'), [
          move('.', './src'),
          forEach((fileEntry: FileEntry) => {
            if (tree.exists(fileEntry.path)) {
              tree.delete(fileEntry.path);
            }
            return fileEntry;
          })
        ])
      );
      return rule(tree, _context);
    }
    return tree;
  };
}

function addRobotoFont(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (_options.font) {
      const headLinkInsertion =
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>';
      const project = getProject(tree, _options);
      const buildOptions = getProjectTargetOptions(project, 'build');
      if (!buildOptions.index) {
        throw new SchematicsException('No index.html file could be found.');
      }
      const indexHtmlFilePath = buildOptions.index;
      appendHtmlElementToHead(tree, indexHtmlFilePath, headLinkInsertion);

      const stylesInsertion =
        `body {\n` + `  font-family: 'Roboto', sans-serif;\n` + `}\n`;

      const stylesFilePath = getProjectStyleFile(project);
      if (!stylesFilePath) {
        _context.logger.warn(
          red(
            'Could not find the global styles file. You have to manually setup the Roboto font in your CSS.'
          )
        );
        return;
      }

      const buffer = tree.read(stylesFilePath);
      if (!buffer) {
        _context.logger.warn(
          red(
            'Could not read the global styles file. You have to manually setup the Roboto font in your CSS.'
          )
        );
        return;
      }

      const stylesFileContent = buffer.toString();

      if (stylesFileContent.includes(stylesInsertion)) {
        _context.logger.info(blue('The Roboto font was already setup.'));
        return;
      }
      const recorder = tree.beginUpdate(stylesFilePath);
      recorder.insertLeft(stylesFileContent.length, stylesInsertion);
      tree.commitUpdate(recorder);
    }
    return tree;
  };
}

function getProject(tree: Tree, _options: Schema) {
  const workspace = getWorkspace(tree);
  const project = getProjectFromWorkspace(
    workspace,
    // Takes the defaultProject in case it's not provided by CLI
    _options.project ? _options.project : workspace.defaultProject
  );
  return project;
}
