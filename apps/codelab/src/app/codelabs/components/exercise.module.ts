import { NgModule } from '@angular/core';
import { CodelabExerciseComponent } from './exercise/exercise.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatSelectModule } from '@angular/material';
import { SimpleEditorModule } from '../../../../../../libs/code-demos/src/lib/editor/simple-editor.module';
import { CodeDemosModule } from '../../../../../../libs/code-demos/src';
import { SimpleAngularTestRunnerComponent } from './angular-test-runner/angular-test-runner.component';
import { SimpleTestsProgressComponent } from './tests-progress/simple-tests-progress.component';
import { SimpleTestsComponent } from './tests/simple-tests.component';
import { SimpleTestDescriptionComponent } from './test-description/simple-test-description.component';
import { MultitabEditorComponent } from './multitab-editor/multitab-editor.component';
import { TitleSlideComponent } from './slides/title-slide/title-slide.component';
import { CodelabSlidesPreviewComponent } from './slides-preview/codelab-slides-preview.component';
import { CodelabClosingSlideComponent } from './slides/closing-slide/codelab-closing-slide.component';
import { CodelabExercisePreviewComponent } from './exercise-preview/exercise-preview.component';
import { CodelabExercisePlayground } from './exercise-playground/codelab-exercise-playground.component';
import { CodelabProgressBarComponent } from './codelab-progress-bar/codelab-progress-bar.component';
import { FilePathComponent } from './file-path/file-path.component';
import { BabelTestRunnerComponent } from './babel-test-runner/babel-test-runner.component';
import { NewSmartRunnerModule } from './new-smart-runner/new-smart-runner.module';
import { EditorFromModelComponent } from './multitab-editor/editor-from-model/editor-from-model.component';
import { CodelabRippleAnimationComponent } from './slides/title-slide/ripple-animation/codelab-ripple-animation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    SimpleEditorModule,
    CodeDemosModule,
    NewSmartRunnerModule
  ],
  declarations: [
    CodelabExerciseComponent,
    SimpleAngularTestRunnerComponent,
    SimpleTestsProgressComponent,
    SimpleTestsComponent,
    SimpleTestDescriptionComponent,
    MultitabEditorComponent,
    TitleSlideComponent,
    CodelabSlidesPreviewComponent,
    CodelabClosingSlideComponent,
    CodelabExercisePreviewComponent,
    CodelabExercisePlayground,
    CodelabProgressBarComponent,
    FilePathComponent,
    BabelTestRunnerComponent,
    EditorFromModelComponent,
    CodelabRippleAnimationComponent,
  ],
  exports: [
    CodelabExerciseComponent,
    SimpleAngularTestRunnerComponent,
    TitleSlideComponent,
    CodelabSlidesPreviewComponent,
    CodelabClosingSlideComponent,
    CodelabExercisePreviewComponent,
    CodelabExercisePlayground,
    CodelabProgressBarComponent,
    FilePathComponent,
    FilePathComponent,
    BabelTestRunnerComponent,
  ],
})
export class CodelabExerciseModule {

}