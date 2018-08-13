import { NgModule } from '@angular/core';
import { PhotoApiComponent } from './photo-api/photo-api';
import { TranslateApiComponent } from './translate-api/translate-api';
import { TranslateSearchComponent } from './translate-search/translate-search';
import { TransFindComponent } from './trans-find/trans-find';
@NgModule({
	declarations: [PhotoApiComponent,
    TranslateApiComponent,
    TranslateSearchComponent,
    TransFindComponent],
	imports: [],
	exports: [PhotoApiComponent,
    TranslateApiComponent,
    TranslateSearchComponent,
    TransFindComponent]
})
export class ComponentsModule {}
