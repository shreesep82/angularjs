var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';
var HeroService = /** @class */ (function () {
    function HeroService(messageService) {
        this.messageService = messageService;
    }
    HeroService.prototype.getHeroes = function () {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().pipe(
        // (+) before `id` turns the string into a number
        map(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); }));
    };
    HeroService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [MessageService])
    ], HeroService);
    return HeroService;
}());
export { HeroService };
//# sourceMappingURL=hero.service.js.map