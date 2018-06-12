import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
      path: '',
      loadChildren: './samplePages/starter/starter.module#StarterModule' 
    },{ 
      path: 'accordion',
      loadChildren: './samplePages/component/accordion/accordion.module#AccordionModule' 
    },{ 
      path: 'alert',
      loadChildren: './samplePages/component/alert/alert.module#NgAlertModule' 
    },{ 
      path: 'carousel',
      loadChildren: './samplePages/component/carousel/carousel.module#ButtonsModule' 
    },{ 
      path: 'datepicker',
      loadChildren: './samplePages/component/datepicker/datepicker.module#DatepickerModule' 
    },{ 
      path: 'dropdown', 
      loadChildren: './samplePages/component/dropdown-collapse/dropdown-collapse.module#DropdownModule' 
    },{ 
      path: 'modal',
      loadChildren: './samplePages/component/modal/modal.module#ModalModule' 
    },{ 
      path: 'pagination',
      loadChildren: './samplePages/component/pagination/pagination.module#paginationModule' 
    },{ 
      path: 'Popovertooltip',
      loadChildren: './samplePages/component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule' 
    },{ 
      path: 'progressbar',
      loadChildren: './samplePages/component/progressbar/progressbar.module#progressbarModule' 
    },{ 
      path: 'rating',
      loadChildren: './samplePages/component/rating/rating.module#RatingModule' 
    },{ 
      path: 'tabs',
      loadChildren: './samplePages/component/tabs/tabs.module#TabsModule' 
    },{ 
      path: 'timepicker',
      loadChildren: './samplePages/component/timepicker/timepicker.module#TimepickerModule' 
    },{ 
      path: 'typehead',
      loadChildren: './samplePages/component/typehead/typehead.module#TypeheadModule' 
    },{ 
      path: 'fontawesome',
      loadChildren: './samplePages/icons/fontawesome/fontawesome.module#FontawesomeModule' 
    },{ 
      path: 'simpleline',
      loadChildren: './samplePages/icons/simpleline/simpleline.module#SimplelineIconModule' 
    },{ 
      path: 'material',
      loadChildren: './samplePages/icons/material/material.module#MaterialComponentModule' 
    }
  ];
 
  @NgModule({
      imports : [RouterModule.forRoot(routes)],
      exports : [RouterModule]
  })
  export class AppRoutingModule { }
  


  