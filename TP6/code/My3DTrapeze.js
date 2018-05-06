/**
 * My3DTrapeze
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class My3DTrapeze extends CGFobject
{
	constructor(scene, bigBase =  1, smallBase = 0.5, depth = 1, height = 1, offset = 0, minS = 0, maxS = 1, minT= 0, maxT=1) 
	{
		super(scene);
        
		this.depth = depth;
		this.height = height;
		this.offset = offset;
		this.smallBase = smallBase;
		this.bigBase = bigBase;

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;

		this.initBuffers();
	};

	initBuffers() 
	{
		this.vertices = [
				-(this.bigBase)/2.0, -(this.height)/2.0, this.depth/2,
				(this.bigBase)/2.0, -(this.height)/2.0, this.depth/2,
				-(this.smallBase)/2.0 + this.offset, (this.height)/2.0, this.depth/2,
				(this.smallBase)/2.0 + this.offset, (this.height)/2.0, this.depth/2,

				-(this.bigBase)/2.0, -(this.height)/2.0,-this.depth/2,
				(this.bigBase)/2.0, -(this.height)/2.0, -this.depth/2,
				-(this.smallBase)/2.0 + this.offset, (this.height)/2.0, -this.depth/2,
				(this.smallBase)/2.0 + this.offset, (this.height)/2.0, -this.depth/2,
				];

		this.indices = [
				
				//front
				0, 1, 2, 
				3, 2, 1,

				//back
				4,6,5,
				7,5,6,
				
				//side
				1,5,3,
				7,3,5,

				//other side

				0,2,4,
				6,4,2,

				//up

				3,7,2,
				6,2,7,

				//bottom

				1,0,5,
				4,5,0,


			];


		this.texCoords = [
			0,1,
			1,1,
			0,0,
			1,0,

			0,1,
			1,1,
			0,0,
			1,0,

			
		];		
			
		this.primitiveType=this.scene.gl.TRIANGLES;

		this.normals = [0,0,1,
						0,0,1,
						0,0,1,
						0,0,1,

						0,0,-1,
						0,0,-1,
						0,0,-1,
						0,0,-1,


		];
		this.initGLBuffers();
	};

};
