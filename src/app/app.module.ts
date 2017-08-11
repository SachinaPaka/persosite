import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { routerTransition } from './router.animation';
import { AppComponent } from './app.component';

//HOME & GENERAL
import { HomeComponent } from '../../src/app/home/home.component';
import { HeaderComponent } from '../../src/app/header/header.component';
import { MenuComponent } from '../../src/app/menu/menu.component';
import { SheepComponent } from '../../src/app/sheep/sheep.component';
import { NotFoundComponent} from '../../src/app/notfound/notfound.component';
import { LoaderComponent} from '../../src/app/loader/loader.component';

//SERVICES
import { CoordsService } from './coords.service';
import { PicsService } from './pics.service';
import { ScoreService } from './score.service';

//PORTFOLIO
import { PortfolioComponent } from '../../src/app/portfolio/portfolio.component';
import { GraphismeComponent } from '../../src/app/portfolio/graphisme/graphisme.component';
import { GamedesignComponent } from '../../src/app/portfolio/gamedesign/gamedesign.component';
import { IllustrationComponent } from '../../src/app/portfolio/illustration/illustration.component';
import { GalerieComponent } from '../../src/app/portfolio/galerie/galerie.component';
  import { SliderComponent } from '../../src/app/portfolio/galerie/slider/slider.component';

//CV
import { CvComponent } from '../../src/app/cv/cv.component';
  import { InfosComponent } from '../../src/app/cv/infos/infos.component';
  import { ParcoursComponent } from '../../src/app/cv/parcours/parcours.component';
    import { TimelineComponent } from '../../src/app/cv/parcours/timeline/timeline.component';
    import { CatdataComponent } from '../../src/app/cv/parcours/catdata/catdata.component';
  import { CompetencesComponent } from '../../src/app/cv/competences/competences.component';
  import { PrixComponent } from '../../src/app/cv/prix/prix.component';
  import { InteretsComponent } from '../../src/app/cv/interets/interets.component';
    import { JaponComponent } from '../../src/app/cv/interets/japon/japon.component';
    import { CatsComponent } from '../../src/app/cv/interets/cats/cats.component';
    import { MusicComponent } from '../../src/app/cv/interets/music/music.component';

//CONTACT
import { ContactComponent } from '../../src/app/contact/contact.component';
  import { FormComponent } from '../../src/app/contact/form/form.component';
  import { ReseauxComponent } from '../../src/app/contact/reseaux/reseaux.component';
  import { CoordsComponent } from '../../src/app/contact/coords/coords.component';
  import { GamemessageComponent } from './gamemessage/gamemessage.component';



const appRoutes: Routes = [
  //HOME
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'menu',component:MenuComponent},

  //CONTACT
  {path:'contact',component:ContactComponent},
    {path:'form',component:FormComponent},
    {path:'reseaux',component:ReseauxComponent},
    {path:'coords',component:CoordsComponent},

  //CV
  {path:'cv',component:CvComponent},
    {path:'competences',component:CompetencesComponent},
    {path:'infos',component:InfosComponent},
    {path:'interets',component:InteretsComponent},
      {path:'japon',component:JaponComponent},
      {path:'cats',component:CatsComponent},
      {path:'music',component:MusicComponent},
    {path:'parcours',component:ParcoursComponent},
      {path:'catdata',component:CatdataComponent},
      {path:'timeline',component:TimelineComponent},
    {path:'prix',component:PrixComponent},

  //PORTFOLIO
  {path:'portfolio',component:PortfolioComponent},
    {path:'galerie',component:GalerieComponent},
    {path:'gamedesign',component:GamedesignComponent},
    {path:'graphisme',component:GraphismeComponent},
    {path:'illustration',component:IllustrationComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ReseauxComponent,
    CoordsComponent,
    PortfolioComponent,
    CvComponent,
    ParcoursComponent,
    CompetencesComponent,
    InteretsComponent,
    PrixComponent,
    FormComponent,
    GraphismeComponent,
    GamedesignComponent,
    IllustrationComponent,
    GalerieComponent,
    SliderComponent,
    TimelineComponent,
    CatdataComponent,
    JaponComponent,
    CatsComponent,
    MusicComponent,
    InfosComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    SheepComponent,
    GamemessageComponent,
    NotFoundComponent,
    LoaderComponent,



  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],

  providers: [CoordsService, PicsService, ScoreService],
  bootstrap: [AppComponent]
})

export class AppModule { }
