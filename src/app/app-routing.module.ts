import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotesearchbodyComponent } from './component/notesearchbody/notesearchbody.component';
import { AuthGuard } from './gaurd/auth.guard';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { PasswordresetComponent } from './component/passwordreset/passwordreset.component';
import { MainNotesComponent } from './component/main-notes/main-notes.component';
import { ArchiveNoteComponent } from './component/archive-note/archive-note.component';
import { TrashComponent } from './component/trash/trash.component';
import { SidenavbarComponent } from './component/sidenavbar/sidenavbar.component';
import { SearchNoteComponent } from './component/search-note/search-note.component';
import { RemainderComponent } from './component/remainder/remainder.component';
import { LabelsComponent } from './component/labels/labels.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'passwordforgot', 
    component: ForgotpasswordComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main-notes',
        component: MainNotesComponent
      },
      {
        path: 'archive-notes',
        component: ArchiveNoteComponent
      },
      {
        path: 'trash-notes',
        component: TrashComponent
      },
      {
        path: 'search',
        component: SearchNoteComponent
      },
      {
        path: 'remainder',
        component: RemainderComponent
      },
      {
        path: 'label/:labelName',
        component: LabelsComponent
      },
      {
        path: '',
        component: SidenavbarComponent
      },
      {
        path: '',
        redirectTo: 'main-notes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'resetpassword/:id', 
    component: PasswordresetComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
