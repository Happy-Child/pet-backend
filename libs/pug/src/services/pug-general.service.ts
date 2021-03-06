import { renderFile } from 'pug';
import { Injectable } from '@nestjs/common';
import { PUG_TEMPLATES_NAMES } from '@app/pug/constants';
import { GetPugTemplateVariablesType } from '@app/pug/types';

@Injectable()
export class PugGeneralService {
  private readonly pathToTemplates: string = 'libs/pug/src/templates';

  compileFile(
    filename: PUG_TEMPLATES_NAMES,
    variablesOrOptions: GetPugTemplateVariablesType<typeof filename>,
  ): string {
    const pathToFile = this.getPathToTemplate(filename);
    return renderFile(pathToFile, variablesOrOptions);
  }

  private getPathToTemplate(name: string): string {
    return `${this.pathToTemplates}/${name}.template.pug`;
  }
}
