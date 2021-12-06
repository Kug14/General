import { NgModule } from "@angular/core";
import { HeaderComponent } from "./Header/header.component";
import { FooterComponent } from "./Footer/footer.component";
import { ContentComponent } from "./Content/content.component";

@NgModule({
    declarations : [HeaderComponent,FooterComponent,ContentComponent],
    imports : [],
    exports : [HeaderComponent,FooterComponent,ContentComponent]
})
export class LayoutModule
{

}