var app=new Vue({
    el:"#app",
    data:{lmpDt:"",eddDt:"",lmpVal:"",eddVal:"",lmpUpdt:"",eddUpdt:"",usgDt:"",usgWk:"",usgDy:""},
    computed:{
	lmpVal:function(){
	    dt=moment(this.lmpDt, "YYYY-MM-DD", true);
	    if(dt.isValid()){
		return dt.format("DD/MM/YYYY");
	    }
	},
	eddVal:function(){
	    dt=moment(this.eddDt, "YYYY-MM-DD", true);
	    if(dt.isValid()){
		return dt.format("DD/MM/YYYY");
	    }
	},
	dateMat:function(){
	    dt=moment(this.lmpDt, "YYYY-MM-DD", true);
	    if(dt.isValid()){
		today=moment();
		days=today.diff(dt, "days");
		if(days>0){
		    return Math.floor(days/7)+" weeks "+days%7+" days";
		}
	    }
	},
	usgMat:function(){
	    dt=moment(this.usgDt, "YYYY-MM-DD", true);
	    if(dt.isValid()){
		if(this.usgWk !=="" && this.usgWk>=0 && this.usgWk<=52 && this.usgDy!=="" && this.usgDy>=0 && this.usgDy<=6){
		    today=moment();
		    diff=today.diff(dt, "days");
		    days=this.usgWk*7+this.usgDy+diff;
		    return Math.floor(days/7)+" weeks "+days%7+" days";
		}
	    }
	},
    },
    methods:{
	lmpUpdt:function(){
	    dt=moment(this.eddDt, "YYYY-MM-DD", true);
	    if(dt.isValid()){
		dt.subtract(9, "months");
		dt.subtract(7, "days");
		this.lmpDt=dt.format("YYYY-MM-DD");
	    }
	    else{
		this.lmpDt=null;
	    }
	},
	eddUpdt:function(){
	    dt=moment(this.lmpDt, "YYYY-MM-DD", true);
	    if(dt.isValid()){
		dt.add(9, "months");
		dt.add(7, "days");
		this.eddDt=dt.format("YYYY-MM-DD");
	    }
	    else{
		this.eddDt=null;
	    }
	}
    }
}); 
