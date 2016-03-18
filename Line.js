function Line(rc,offset){
    this.rc = rc;
    this.offset = offset;
    
    this.y = function(x){
        return this.rc * x + this.offset;
    }
}