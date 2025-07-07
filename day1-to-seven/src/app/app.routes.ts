import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Day2Component } from './components/day2/day2.component';
import { Day3Component } from './components/day3/day3.component';
import { Day4Component } from './components/day4/day4.component';
import { Day5Component } from './components/day5/day5.component';
import { Day6Component } from './components/day6/day6.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent,
    },
    {
        path:'day1',
        component:HomePageComponent,
    },
    {
        path:'day2',
        component:Day2Component,
    },
     {
        path:'day3',
        component:Day3Component,
    },
    {
        path:'day4',
        component:Day4Component,
    },
    {
        path:'day5',
        component:Day5Component,
    },
    {
        path:'day6',
        component:Day6Component,
    }




];
