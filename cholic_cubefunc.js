
function btn_act(ipx, iev) {
	if (iev < 0) {
		return ipx;
	}

	var opx = ipx;
	
	if (iev < 10) {
		opx = slide_xm3(ipx, iev-1);
	} else if (iev < 20) {
		opx = slide_xp3(ipx, iev-11);
	} else if (iev < 30) {
		opx = slide_yp3(ipx, iev-21);
	} else if (iev < 40) {
		opx = slide_ym3(ipx, iev-31);
	} else if (iev == 41) {
		opx = slide_xm3(ipx, 0);
		opx = slide_xm3(ipx, 1);
		opx = slide_xm3(ipx, 2);
		opx = rotate_cw(opx, 0);
		opx = rotate_acw(opx, 5);
	} else if (iev == 42) {
		opx = slide_xp3(ipx, 0);
		opx = slide_xp3(ipx, 1);
		opx = slide_xp3(ipx, 2);
		opx = rotate_cw(opx, 5);
		opx = rotate_acw(opx, 0);
	} else if (iev == 43) {
		opx = slide_yp3(ipx, 0);
		opx = slide_yp3(ipx, 1);
		opx = slide_yp3(ipx, 2);
		opx = rotate_acw(opx, 1);
		opx = rotate_cw(opx, 3);
	} else if (iev == 44) {
		opx = slide_ym3(ipx, 0);
		opx = slide_ym3(ipx, 1);
		opx = slide_ym3(ipx, 2);
		opx = rotate_cw(opx, 1);
		opx = rotate_acw(opx, 3);
	}
	
	if (iev == 1) {
		opx = rotate_cw(opx, 0);
	} else if (iev == 3) {
		opx = rotate_acw(opx, 5);
	} else if (iev == 11) {
		opx = rotate_acw(opx, 0);
	} else if (iev == 13) {
		opx = rotate_cw(opx, 5);
	} else if (iev == 21) {
		opx = rotate_acw(opx, 1);
	} else if (iev == 23) {
		opx = rotate_cw(opx, 3);
	} else if (iev == 31) {
		opx = rotate_cw(opx, 1);
	} else if (iev == 33) {
		opx = rotate_acw(opx, 3);
	}

	return opx;
}

function rotate_cw(ipx, ii) {
	var opx = ipx;
	var c = ipx[ii][0][0];
	opx[ii][0][0] = ipx[ii][0][2];
	opx[ii][0][2] = ipx[ii][2][2];
	opx[ii][2][2] = ipx[ii][2][0];
	opx[ii][2][0] = c;
	c = ipx[ii][1][0];
	opx[ii][1][0] = ipx[ii][0][1];
	opx[ii][0][1] = ipx[ii][1][2];
	opx[ii][1][2] = ipx[ii][2][1];
	opx[ii][2][1] = c;
	return opx;	
}

function rotate_acw(ipx, ii) {
	var opx = ipx;
	var c = ipx[ii][0][0];
	opx[ii][0][0] = ipx[ii][2][0];
	opx[ii][2][0] = ipx[ii][2][2];
	opx[ii][2][2] = ipx[ii][0][2];
	opx[ii][0][2] = c;
	c = ipx[ii][1][0];
	opx[ii][1][0] = ipx[ii][2][1];
	opx[ii][2][1] = ipx[ii][1][2];
	opx[ii][1][2] = ipx[ii][0][1];
	opx[ii][0][1] = c;
	return opx;	
}

function slide_xp3(ipx, n) {
	var opx = ipx;
	for (var ix = 0; ix < 3; ix ++) {
		var c = ipx[4][ix][n];
		opx[4][ix][n] = ipx[3][ix][n];
		opx[3][ix][n] = ipx[2][ix][n];
		opx[2][ix][n] = ipx[1][ix][n];
		opx[1][ix][n] = c;
	}

	return opx;
}

function slide_yp3(ipx, n) {
	var opx = ipx;
	for (var iy = 0; iy < 3; iy ++) {
		var c = ipx[0][n][iy];
		opx[0][n][iy] = ipx[2][n][iy];
		opx[2][n][iy] = ipx[5][n][iy];
		opx[5][n][iy] = ipx[4][2-n][iy];
		opx[4][2-n][iy] = c;
	}

	return opx;
}

function slide_xm3(ipx, n) {
	var opx = ipx;
	for (var ix = 0; ix < 3; ix ++) {
		var c = ipx[1][ix][n];
		opx[1][ix][n] = ipx[2][ix][n];
		opx[2][ix][n] = ipx[3][ix][n];
		opx[3][ix][n] = ipx[4][ix][n];
		opx[4][ix][n] = c;
	}

	return opx;
}

function slide_ym3(ipx, n) {
	var opx = ipx;
	for (var iy = 0; iy < 3; iy ++) {
		var c = ipx[0][n][iy];
		opx[0][n][iy] = ipx[4][2-n][iy];
		opx[4][2-n][iy] = ipx[5][n][iy];
		opx[5][n][iy] = ipx[2][n][iy];
		opx[2][n][iy] = c;
	}

	return opx;
}

