/* tslint:disable:no-any */

import { NgModuleRef, ApplicationRef, ComponentRef } from '@angular/core';
import { createNewHosts, removeNgStyles } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<{}>>) => {
    let ngModule: NgModuleRef<{}>;
    module.hot.accept();
    bootstrap().then((mod: NgModuleRef<{}>) => ngModule = mod);
    module.hot.dispose(() => {
        const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);

        const makeVisible = createNewHosts(appRef.components.map((c: ComponentRef<{}>) => c.location.nativeElement));
        removeNgStyles();
        ngModule.destroy();

        makeVisible();
    });
};
