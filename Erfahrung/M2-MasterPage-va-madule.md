0-sakhte module
----mirim tooye app
----ng generate module wiki --routing  ya ng generate module wiki --routing
----mamoolan routing dar app.module tarif mishe vali hameye module ha routing mmikhan...bara route khali
1-
"app module" mishavad master page
1-1..........routerLink="/elements"
1-2..........routerLinkActive="active"......yani vaghti root jari shavad property "active" migirad
1-3.......... <router-outlet></router-outlet>......component jadid miad inja  
1-4..........sakhte component "NotFound"
1-5..........component asli ham haman Home ast.....default Page ham has
<div class="ui container">

    <div class="ui pointing menu">
        <a class="item" routerLink="/elements" routerLinkActive="active">
            elements
        </a>
        <a class="item" routerLink="/collections" routerLinkActive="active">
            collections
        </a>
        <a class="item" routerLink="/wiki" routerLinkActive="active">
            Views
        </a>
        <div class="right menu">
            <div class="item">
                <div class="ui transparent icon input">
                    <input type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
      </div>
    </div>
</div>
<div class="ui segment">
    <p>
        <router-outlet></router-outlet>
    </p>
</div>


</div>
 


 2-
 dar app.routing.module:...............LazyLoading ham has
 --inja mitavan Lazyloading kard madule ha ra......yani agar in menu zade shod madule bala biad...
 ---barname mire dare "routing" oon module---------mohem
 --inja Home va "Notfound" ham rout mishan
 --Redirect kardan be yek component ham ke maloo ast
 const routes: Routes = [
  {path : 'elements' , loadChildren : () => import('./element/element.module').then(m=>m.ElementModule)},
  {path : 'collections' , loadChildren : () => import('./collection/collection.module').then(m=>m.CollectionModule)},
  {path : 'wiki' , loadChildren : () => import('./wiki/wiki.module').then(m=>m.WikiModule)},
  {path : '' , redirectTo : '/Home' , pathMatch : 'full'},
  {path : 'Home' , component : HomeComponent},
  {path : 'notfound' , component : NotFoundComponent},
  {path : '**' , redirectTo : '/notfound'}
];

agar /element tavassote masterPage zade shod boro too bache ha begard va in module ra biar dar <router-outlet>
agar ...
agar ...
agar hichi nazade shod boro be "home"
agar Home zade shod boro be component "Home"
agar "notfound" oomad boro be component "notfound"
agar "**" yani har chize digari joz balaii ha, boro be notfound

3-
routing madule sani

file wiki.routing.module.ts
.....
const routes: Routes = [
  {path : '' , component : HomeComponent}...............yani age kesi oomad befrestesh be component Home
];
....agar ye meghdar dashte bashad bayad an dobar tekrar shavad: ..../wiki/wiki