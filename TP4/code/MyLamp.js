/**
 * MyLamp
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyLamp extends CGFobject
{
	constructor(scene, slices, stacks) 
	{
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers() 
	{
		var alpha = 2*Math.PI/this.slices;
		var beta = (Math.PI/2)/this.stacks;
		this.vertices = [];
		this.normals = [];
		this.indices = [];
		
		var z = 0;
		var raio = 1;

		for(let i = 0; i < this.stacks; i ++)
		{
			if(i > 0)
				raio = Math.cos(Math.asin(z));

			for(var j = 0; j < this.slices; j++)
			{
				this.vertices.push(Math.cos(j*alpha)*raio, Math.sin(j*alpha)* raio,z);
				this.normals.push(Math.cos(j*alpha), Math.sin(j*alpha), raio);
			}	

			z += 1/this.stacks;
						
		}
		this.vertices.push(0,0,1);
		this.normals.push(Math.cos(j*alpha), Math.sin(j*alpha), raio);
				
		var ind = 0;

		for(let i = 0; i < this.stacks - 1;i++)
		{
			for(let j = 0; j < this.slices; j++)
			{	
				if(j != this.slices -1 )
				{
					this.indices.push(ind, ind + 1, ind + this.slices);
					this.indices.push(ind + this.slices, ind +1, ind + this.slices + 1);
				}
				else
				{
					this.indices.push(ind, i*this.slices, ind + this.slices);
					this.indices.push(ind + this.slices, i*this.slices, (i+1)*this.slices);
				}

				ind++;
			}
		}

		var vert_ind = ind+this.slices;
		var first_ind = ind;

		for(let i = 0; i < this.slices; i++)
		{	
		if(i == this.slices -1)
		{
			this.indices.push(ind,first_ind, vert_ind);
		}
		else
		{
			this.indices.push(ind,ind+1, vert_ind);
		}
			ind++;
		}

		console.log(this.vertices.length);	
		console.log(this.normals.length);
		console.log(this.indices.length);
		this.primitiveType=this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
