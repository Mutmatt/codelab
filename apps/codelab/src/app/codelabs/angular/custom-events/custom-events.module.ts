import { CustomEventsComponent } from './custom-events.component';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../../libs/presentation/src/lib/slide-routes';

import { FeedbackModule } from '../../../../../../../libs/feedback/src/lib/feedback.module';
import { CommonModule } from '@angular/common';
import { BrowserWindowModule } from '../../../../../../../libs/browser/src/lib/browser.module';

import { PresentationModule } from '../../../../../../../libs/presentation/src/lib/presentation.module';
import { CodelabExerciseModule } from '../../components/exercise.module';
import { SlidesModule } from '../../../../../../../libs/slides/src';
import { SimpleEditorModule } from '../../../../../../../libs/code-demos/src/lib/editor/simple-editor.module';
import { FormsModule } from '@angular/forms';

const routes = RouterModule.forChild(
  [
    {
      path: '',
      redirectTo: '/custom-events/intro',
      pathMatch: 'full'
    }, ...SlidesRoutes.get(CustomEventsComponent)
  ]
);

@NgModule({
  imports: [
    routes,
    PresentationModule,

    FeedbackModule,
    CommonModule,
    BrowserWindowModule,

    CodelabExerciseModule,
    SlidesModule,
    SimpleEditorModule,
    FormsModule,
  ],
  declarations: [CustomEventsComponent],
  exports: [CustomEventsComponent]
})
export class CustomEventsModule {
}