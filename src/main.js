/**********************************************************************
 * Title: ObsCalc
 * Description: An Obstetric Calculator
 * Author: Agnibho Mondal
 * Website: http://code.agnibho.com
 **********************************************************************
   Copyright (c) 2016 Agnibho Mondal
   All rights reserved
 **********************************************************************
   This file is part of ObsCalc.

   ObsCalc is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   ObsCalc is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with Obscalc. If not, see <http://www.gnu.org/licenses/>.
 **********************************************************************/

//Icon
import "./assets/logo.png"

//CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker3.css";
import "./custom.css";

//JS libs
import "jquery";
import "bootstrap";
import "bootstrap-datepicker";
import "bootstrap-validator";

//Vue Components
import Vue from "vue";
import ByDate from "./ByDate.vue";
import ByUsg from "./ByUsg.vue";
import Settings from "./Settings.vue";

//Start app
new Vue({
  el: "#app",
  components: {
    "by-date": ByDate,
    "by-usg": ByUsg,
    "settings-btn": Settings
  },
  data: {settings: ""},
  mounted:function(){
    try{
      this.settings=JSON.parse(localStorage.getItem("obscalc_settings"));
    }
    catch(e){
    }
    finally{
      if(this.settings==null){
        this.settings={dstyle:"cal"};
      }
      else if(this.settings.dstyle!="cal" && this.settings.dstyle!="txt"){
        this.settings={dstyle:"cal"};
      }
    }
  }
});

//Routine jobs
import "./routine.js"

//Source Map
//#sourceMappingURL=dist/bundle.js.map;
