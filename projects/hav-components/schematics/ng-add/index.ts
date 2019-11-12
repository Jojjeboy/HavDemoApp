import { Schema } from './schema';
import {
  NodeDependencyType,
  NodeDependency,
  addPackageJsonDependency
} from '@schematics/angular/utility/dependencies';
import {
  Rule,
  SchematicContext,
  Tree,
  chain
} from '@angular-devkit/schematics';
import {
  NodePackageInstallTask,
  RunSchematicTask
} from '@angular-devkit/schematics/tasks';
import { peerDependencies } from '../../package.json';

export function ngAdd(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return chain([
      addPackageJsonDependencies(),
      installDependencies(),
      setupTargetProject(_options)
    ])(tree, _context);
  };
}

const nodeDependencies: NodeDependency[] = [
  {
    type: NodeDependencyType.Default,
    name: 'hav-components',
    version: `file:../hav-components/dist/hav-components/hav-components-0.0.9.tgz`,
    overwrite: false
  },
  {
    type: NodeDependencyType.Dev,
    name: '@angular/cdk',
    version: `${peerDependencies['@angular/cdk']}`,
    overwrite: false
  }
];

function addPackageJsonDependencies(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    nodeDependencies.forEach((dependency: NodeDependency) => {
      addPackageJsonDependency(tree, dependency);
    });
    return tree;
  };
}

function installDependencies(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

function setupTargetProject(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const installTaskId = _context.addTask(new NodePackageInstallTask());
    _context.addTask(
      new RunSchematicTask('ng-add-setup-target-project', _options),
      [installTaskId]
    );
    return tree;
  };
}
