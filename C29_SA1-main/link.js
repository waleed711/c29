class link{
    constructor(bodyA,bodyB){
        var lastlink = bodyA.body.bodies.length-2
        this.link = Constraint.create({
            bodyA:bodyA,
            pointA:{x:0,y:0},
            bodyB:bodyB,
            bointB:{x:0,y:0},
            length:-10,
            stiffness:0.01
        })
    World.add(world,this.link)
    }
}