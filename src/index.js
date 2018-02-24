module.exports = function solveEquation(equation) {
	let a,b,c,D,x1,x2;
	let massiv =[];
	let mas =[];
  
	massiv = equation.replace( /\s/g, "");  
	massiv = massiv.replace( '*', " ");		
	massiv = massiv.replace( 'x^2', " ");	
	massiv = massiv.replace( '*x', " ");	
	
	mas = massiv.split(' ');	
	
	a = mas[0];
	b = mas[2];
	c = mas[3];
	
	a = Number(a);
	b = Number(b);
	c = Number(c);
	
	D=b*b-4*a*c;                
	x1=(-b+Math.sqrt(D))/(2*a); 
	x2=(-b-Math.sqrt(D))/(2*a); 
	
	if (x1>x2){
		var x;
		x=x1; 
		x1=x2; 
		x2=x;
	};
	
	x1=Math.round(x1);
	x2=Math.round(x2);
	
	let solutions=[x1,x2];  
	return solutions;
}
