import { NgModule } from '@angular/core';
import { CodePushComponent } from './code-push/code-push';
import { BabyComponent } from './baby/baby';
import { SideMenuComponent } from './side-menu/side-menu';
@NgModule({
	declarations: [CodePushComponent,
    BabyComponent,
    SideMenuComponent],
	imports: [],
	exports: [CodePushComponent,
    BabyComponent,
    SideMenuComponent]
})
export class ComponentsModule {}
