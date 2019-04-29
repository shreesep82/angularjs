var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
var CrisisCenterModule = /** @class */ (function () {
    function CrisisCenterModule() {
    }
    CrisisCenterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                CrisisCenterRoutingModule
            ],
            declarations: [
                CrisisCenterComponent,
                CrisisListComponent,
                CrisisCenterHomeComponent,
                CrisisDetailComponent
            ]
        })
    ], CrisisCenterModule);
    return CrisisCenterModule;
}());
export { CrisisCenterModule };
//# sourceMappingURL=crisis-center.module.js.map