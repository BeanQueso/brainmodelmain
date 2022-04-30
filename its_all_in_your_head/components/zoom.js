AFRAME.registerComponent("zoom", {
    init:function(){
        this.zoomin()
        this.zoomout()
    },

    zoomin:function(){
        camera = document.querySelector("#camera")

        window.addEventListener("keydown", (e)=>{
            if (e.key === "e"){
                camera.setAttribute("animation", {"property":"camera.zoom", "from":1, "to": 3, "dur":200, "easing":"easeInOutQuad"})
            }
        })
    },

    zoomout:function(){
        camera = document.querySelector("#camera")

        window.addEventListener("keydown", (e)=>{
            if (e.key === "r"){
                camera.setAttribute("animation", {"property":"camera.zoom", "from":3, "to": 1, "dur":200, "easing":"easeInOutQuad"})
            }
        })
    }

})