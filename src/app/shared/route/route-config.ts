import { Route, UrlMatcher, Data, ResolveData, Routes, LoadChildren, RunGuardsAndResolvers } from "@angular/router";
import { Type } from "@angular/core";

export class RouteConfig implements Route{
    path?: string;
    pathMatch?: string;
    matcher?: UrlMatcher;
    component?: Type<any>;
    redirectTo?: string;
    outlet?: string;
    canActivate?: any[];
    canActivateChild?: any[];
    canDeactivate?: any[];
    canLoad?: any[];
    data?: Data;
    resolve?: ResolveData;
    children?: Routes;
    myChildren?: Routes;
    loadChildren?: LoadChildren;
    runGuardsAndResolvers?: RunGuardsAndResolvers;
}