AFRAME.registerComponent("rise", {
    init:function(){
        this.incy()
        this.decy()
    },

    incy:function(){
        camera = document.querySelector("#camera")
        pos = camera.getAttribute("position")

        window.addEventListener("keydown", (e)=>{
            if (e.key === "c"){
                pos.y+=0.07
                camera.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
            }
        })
    },
    
    decy:function(){
        camera = document.querySelector("#camera")
        pos = camera.getAttribute("position")

        window.addEventListener("keydown", (e)=>{
            if (e.key === "v"){
                pos.y-=0.07
                camera.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
            }
        })
    }
})