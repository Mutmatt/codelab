import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseProvider } from 'angularfire2/database';
import { AngularFireAuthProvider } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../../libs/slides/src/slide-routes';
import { BrowserWindowModule } from '../../../browser/browser.module';
import { SlidesModule } from '../../../../../../../libs/slides/src/slides.module';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpModule } from '@angular/http';
import { FeedbackModule } from '../../../feedback/feedback.module';
import { RatingSummaryComponent } from './rating-summary.component';


const routes = RouterModule.forChild(
  SlidesRoutes.get(RatingSummaryComponent)
);

export const angularFire = AngularFireModule.initializeApp(environment.firebaseConfig);

@NgModule({
  imports: [routes, BrowserWindowModule, SlidesModule, angularFire, CommonModule, HttpModule, FeedbackModule],
  declarations: [RatingSummaryComponent],
  providers: [AngularFireDatabaseProvider, AngularFireAuthProvider],
  exports: [RatingSummaryComponent]
})
export class RatingSummaryModule {

}