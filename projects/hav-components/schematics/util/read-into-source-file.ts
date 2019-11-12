import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { SourceFile } from 'typescript';
import * as ts from 'typescript';

export default function readIntoSourceFile(
  tree: Tree,
  fileName: string
): SourceFile {
  const buffer = tree.read(fileName);
  if (buffer === null) {
    throw new SchematicsException(`File ${fileName} does not exist.`);
  }

  return ts.createSourceFile(
    fileName,
    buffer.toString('utf-8'),
    ts.ScriptTarget.Latest,
    true
  );
}
