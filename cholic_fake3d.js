
function fake3d_draws(ictx, fpx, ofs, pxs, iev77) {
	console.log(iev77);
	const XOFSDEF = 11;
	const YOFSDEF = 1;
	var rt3 = 1.7320508075;
	var d23 = 2.0/3.0;
	var gap = (ofs-pxs)/2.0-1;

	if (iev77) {
		ictx.globalAlpha = 1.0;
	} else {
		ictx.globalAlpha = 0.0;
	}

	for (var n = 0; n < 3; n++) {
		var zofsx = ofs*XOFSDEF;
		var zofsy = ofs*(YOFSDEF+d23) + ofs*n*d23;

		for (var i = 0; i < 3; i++) {
			ictx.beginPath();
			ictx.moveTo(zofsx, zofsy+ofs);
			ictx.lineTo(zofsx, zofsy+ofs-pxs*d23);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs*d23-pxs*d23/2.0);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs*d23/2.0);
			ictx.closePath();
			ictx.fillStyle = fpx[1][2-i][n];
			ictx.fill();

			zofsx += ofs*rt3/3.0;
			zofsy -= ofs/3.0;
		}	
	}

	for (var n = 0; n < 3; n++) {
		var zofsx = ofs*XOFSDEF + ofs*n*rt3/3.0 + gap;
		var zofsy = ofs*(YOFSDEF+2) - ofs*n/3.0 + gap;

		for (var i = 0; i < 3; i++) {
			ictx.beginPath();
			ictx.moveTo(zofsx, zofsy+ofs);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs/3.0);
			ictx.lineTo(zofsx+pxs*2.0*rt3/3.0, 
				zofsy+ofs);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs+pxs/3.0);
			ictx.closePath();
			ictx.fillStyle = fpx[5][i][n];
			ictx.fill();

			zofsx += ofs*rt3/3.0;
			zofsy += ofs/3.0;
		}
	}

	for (var n = 0; n < 3; n++) {
		var zofsx = ofs*XOFSDEF + ofs*rt3;
		var zofsy = ofs*(YOFSDEF-1+d23) + ofs*n*d23;

		for (var i = 0; i < 3; i++) {
			ictx.beginPath();
			ictx.moveTo(zofsx, zofsy+ofs);
			ictx.lineTo(zofsx, zofsy+ofs-pxs*d23);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs*d23/2.0);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs+pxs/3.0);
			ictx.closePath();
			ictx.fillStyle = fpx[4][2-i][n];
			ictx.fill();

			zofsx += ofs*rt3/3.0;
			zofsy += ofs/3.0;
		}
	}

	if (iev77) {
		ictx.globalAlpha = 0.8;
	} else {
		ictx.globalAlpha = 1.0;
	}

	for (var n = 0; n < 3; n++) {
		var zofsx = ofs*XOFSDEF + ofs*n*rt3/3.0 + gap;
		var zofsy = ofs*YOFSDEF - ofs*n/3.0 + gap;

		for (var i = 0; i < 3; i++) {
			ictx.beginPath();
			ictx.moveTo(zofsx, zofsy+ofs);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs/3.0);
			ictx.lineTo(zofsx+pxs*2.0*rt3/3.0, 
				zofsy+ofs);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs+pxs/3.0);
			ictx.closePath();
			ictx.fillStyle = fpx[0][i][2-n];
			ictx.fill();

			zofsx += ofs*rt3/3.0;
			zofsy += ofs/3.0;
		}
	}

	for (var n = 0; n < 3; n++) {
		var zofsx = ofs*XOFSDEF;
		var zofsy = ofs*(YOFSDEF+d23) + ofs*n*d23;

		for (var i = 0; i < 3; i++) {
			ictx.beginPath();
			ictx.moveTo(zofsx, zofsy+ofs);
			ictx.lineTo(zofsx, zofsy+ofs-pxs*d23);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs*d23/2.0);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs+pxs/3.0);
			ictx.closePath();
			ictx.fillStyle = fpx[2][i][n];
			ictx.fill();

			zofsx += ofs*rt3/3.0;
			zofsy += ofs/3.0;
		}
	}

	for (var n = 0; n < 3; n++) {
		var zofsx = ofs*XOFSDEF + ofs*rt3;
		var zofsy = ofs*(YOFSDEF+d23) + ofs*(n+1)*d23 + pxs/3.0;

		for (var i = 0; i < 3; i++) {
			ictx.beginPath();
			ictx.moveTo(zofsx, zofsy+ofs);
			ictx.lineTo(zofsx, zofsy+ofs-pxs*d23);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs*d23-pxs*d23/2.0);
			ictx.lineTo(zofsx+pxs*rt3/3.0, 
				zofsy+ofs-pxs*d23/2.0);
			ictx.closePath();
			ictx.fillStyle = fpx[3][i][n];
			ictx.fill();

			zofsx += ofs*rt3/3.0;
			zofsy -= ofs/3.0;
		}	
	}

	ictx.globalAlpha = 1.0;
}
