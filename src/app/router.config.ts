import { TicketListComponent } from './admin/tickets/ticket-list/ticket-list.component';
import { TicketEditComponent } from './admin/tickets/ticket-edit/ticket-edit.component';
import { TicketNewComponent } from './admin/tickets/ticket-new/ticket-new.component';
import { SiteConfigComponent } from './admin/site-config/site-config.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { SponsorEditComponent } from './sponsors/sponsor-edit/sponsor-edit.component';
import { SponsorNewComponent } from './sponsors/sponsor-new/sponsor-new.component';
import { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
import { SpeakerEditComponent } from './speakers/speaker-edit/speaker-edit.component';
import { SpeakerNewComponent } from './speakers/speaker-new/speaker-new.component';
import { SessionEditComponent } from './sessions/session-edit/session-edit.component';
import { SessionNewComponent } from './sessions/session-new/session-new.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

export const routerConfig: Route[] = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthGuard]
}, {
  path: 'config',
  component: SiteConfigComponent,
  canActivate: [AuthGuard]
}, {
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
}, {
  path: 'sessions',
  children: [{
    path: 'new',
    component: SessionNewComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id',
    children: [{
      path: '',
      component: SessionDetailComponent
    }, {
      path: 'edit',
      component: SessionEditComponent,
      canActivate: [AuthGuard]
    }]
  }, {
    path: '',
    component: SessionListComponent
  }]
}, {
  path: 'speakers',
  children: [{
    path: 'new',
    component: SpeakerNewComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id',
    children: [{
      path: 'edit',
      component: SpeakerEditComponent,
      canActivate: [AuthGuard]
    }]
  }, {
    path: '',
    component: SpeakerListComponent
  }]
}, {
  path: 'sponsors',
  children: [{
    path: 'new',
    component: SponsorNewComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id',
    children: [{
      path: 'edit',
      component: SponsorEditComponent,
      canActivate: [AuthGuard]
    }]
  }, {
    path: '',
    component: SponsorListComponent
  }]
}, {
  path: 'tickets',
  children: [{
    path: 'new',
    component: TicketNewComponent,
    canActivate: [AuthGuard]
  }, {
    path: ':id',
    children: [{
      path: 'edit',
      component: TicketEditComponent,
      canActivate: [AuthGuard]
    }]
  }, {
    path: '',
    component: TicketListComponent
  }]
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'home'
}];
