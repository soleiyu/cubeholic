
function bt_que(i_x, i_y, ofs, pxs) {
	var fx = Math.trunc(i_x/ofs);
	var fy = Math.trunc(i_y/ofs);

	var jx = ofs*fx+pxs < i_x;
	var jjx = 6*ofs < i_x && i_x < 8*ofs+pxs;
	var jy = ofs*fy+pxs < i_y;
	var jjy = 6*ofs < i_y && i_y < 8*ofs+pxs;

	if (jx) {
		if (fy == 1 && jjx) {
		} else if (fy == 13 && jjx) {
		} else {
			fx = -1;
		}
	}
	if (jy) {
		if (fx == 1 && jjy) {
		} else if (fx == 16 && jjy) {
		} else {
			fy = -1;
		}
	}
	
	var ev = 0;
	if (fx == 2 && fy == 6) {
		ev = 1;
	} else if (fx == 2 && fy == 7) {
		ev = 2;
	} else if (fx == 2 && fy == 8) {
		ev = 3;
	} else if (fx == 15 && fy == 6) {
		ev = 11;
	} else if (fx == 15 && fy == 7) {
		ev = 12;
	} else if (fx == 15 && fy == 8) {
		ev = 13;
	} else if (fx == 6 && fy == 2) {
		ev = 21;
	} else if (fx == 7 && fy == 2) {
		ev = 22;
	} else if (fx == 8 && fy == 2) {
		ev = 23;
	} else if (fx == 6 && fy == 12) {
		ev = 31;
	} else if (fx == 7 && fy == 12) {
		ev = 32;
	} else if (fx == 8 && fy == 12) {
		ev = 33;
	} else if (fx == 1 && jjy) {
		ev = 41;
	} else if (fx == 16 && jjy) {
		ev = 42;
	} else if (fy == 1 && jjx) {
		ev = 43;
	} else if (fy == 13 && jjx) {
		ev = 44;
	} else if (fy == 7 && fy ==7) {
		ev = 77;
	}

	return ev;
}
