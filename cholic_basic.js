
function px_initialize(n) {
	var fpx = [];
	for (var i = 0; i < 6; i++) {
		fpx[i] = [];
		for (var x = 0; x < n; x++) {
			fpx[i][x] = [];
			for (var y = 0; y < n; y++) {
				switch(i) {
					case 0:
						fpx[i][x][y] = "#FFFF00";
						break;
					case 1:
						fpx[i][x][y] = "#0000FF";
						break;
					case 2:
						fpx[i][x][y] = "#FF0000";
						break;
					case 3:
						fpx[i][x][y] = "#00FF00";
						break;
					case 4:
						fpx[i][x][y] = "#FF8000";
						break;
					case 5:
						fpx[i][x][y] = "#FFFFFF";
						break;
					default:
						fpx[i][x][y] = "#000000";
				}
			}		
		}
	}
	return fpx;
}

function px_draws(ctx, fpx) {
	for (var i = 0; i < 6; i++) {
		for (var x = 0; x < 3; x++) {
			for (var y = 0; y < 3; y++) {
				writeSq(ctx, i, x, y, fpx[i][x][y]);
			}
		}
	}
}

function bt_draws(ctx) {
	writeSqXY(ctx, 2, 6, "#A0A0A0");
	writeSqXY(ctx, 2, 7, "#A0A0A0");
	writeSqXY(ctx, 2, 8, "#A0A0A0");
	writeSqXY(ctx, 15, 6, "#A0A0A0");
	writeSqXY(ctx, 15, 7, "#A0A0A0");
	writeSqXY(ctx, 15, 8, "#A0A0A0");
	writeSqXY(ctx, 6, 2, "#A0A0A0");
	writeSqXY(ctx, 7, 2, "#A0A0A0");
	writeSqXY(ctx, 8, 2, "#A0A0A0");
	writeSqXY(ctx, 6, 12, "#A0A0A0");
	writeSqXY(ctx, 7, 12, "#A0A0A0");
	writeSqXY(ctx, 8, 12, "#A0A0A0");

	writeSqXYC(ctx, 1, 6, 1, 3, "#808080");
	writeSqXYC(ctx, 16, 6, 1, 3, "#808080");
	writeSqXYC(ctx, 6, 1, 3, 1, "#808080");
	writeSqXYC(ctx, 6, 13, 3, 1, "#808080");

	var ofs = 50;

	writeArrow(ctx, 2*ofs, 6*ofs, 3, "#404040"); 
	writeArrow(ctx, 2*ofs, 7*ofs, 3, "#404040"); 
	writeArrow(ctx, 2*ofs, 8*ofs, 3, "#404040"); 
	writeArrow(ctx, 15*ofs, 6*ofs, 1, "#404040"); 
	writeArrow(ctx, 15*ofs, 7*ofs, 1, "#404040"); 
	writeArrow(ctx, 15*ofs, 8*ofs, 1, "#404040"); 
	writeArrow(ctx, 6*ofs, 2*ofs, 0, "#404040"); 
	writeArrow(ctx, 7*ofs, 2*ofs, 0, "#404040"); 
	writeArrow(ctx, 8*ofs, 2*ofs, 0, "#404040"); 
	writeArrow(ctx, 6*ofs, 12*ofs, 2, "#404040"); 
	writeArrow(ctx, 7*ofs, 12*ofs, 2, "#404040"); 
	writeArrow(ctx, 8*ofs, 12*ofs, 2, "#404040"); 

	writeArrow(ctx, 1*ofs, 7*ofs, 3, "#C0C0C0");
	writeArrow(ctx, 16*ofs, 7*ofs, 1, "#C0C0C0");
	writeArrow(ctx, 7*ofs, 1*ofs, 0, "#C0C0C0");
	writeArrow(ctx, 7*ofs, 13*ofs, 2, "#C0C0C0");
}

function writeArrow(i_ctx, i_x, i_y, i_i, i_c) {
	i_ctx.beginPath();
	
	switch(i_i) {
		case 0: //up
			i_ctx.moveTo(i_x + 10, i_y + 29);
			i_ctx.lineTo(i_x + 23, i_y + 16);
			i_ctx.lineTo(i_x + 35, i_y + 29);
			break;
		case 3:	//left
			i_ctx.moveTo(i_x + 29, i_y + 10);
			i_ctx.lineTo(i_x + 16, i_y + 23);
			i_ctx.lineTo(i_x + 29, i_y + 35);
			break;
		case 2: //down
			i_ctx.moveTo(i_x + 10, i_y + 16);
			i_ctx.lineTo(i_x + 23, i_y + 29);
			i_ctx.lineTo(i_x + 35, i_y + 16);
			break;
		case 1: //right
			i_ctx.moveTo(i_x + 16, i_y + 10);
			i_ctx.lineTo(i_x + 29, i_y + 23);
			i_ctx.lineTo(i_x + 16, i_y + 35);
			break;
		default:
			i_ctx.moveTo(i_x + 0, i_y + 0);
			i_ctx.lineTo(i_x + 45, i_y + 45);
			i_ctx.moveTo(i_x + 0, i_y + 45);
			i_ctx.lineTo(i_x + 45, i_y + 0);
	}

	i_ctx.strokeStyle = i_c;
	i_ctx.lineWidth = "3";
	i_ctx.stroke();
}

// ctx, i, x, y, c
function writeSq(i_ctx, i_i, i_x, i_y, i_c) {
	var pxs = 45;
	var ofs = 50;
	var xv = 0;
	var yv = 0;
	if (i_i == 0 || i_i == 5) {
		xv = 3;
	}	else {
		xv = 3 * (i_i - 1);
	}
	if (i_i == 5) {
		yv = 6;
	} else if (0 < i_i) {
		yv = 3;
	}

	i_ctx.beginPath();
	i_ctx.rect(ofs*(xv + i_x + 3), ofs*(yv + i_y + 3), pxs, pxs);
	i_ctx.fillStyle = i_c;
	i_ctx.fill();
	i_ctx.closePath();
}

function writeSqXY(i_ctx, i_x, i_y, i_c) {
	var pxs = 45;
	var ofs = 50;

	i_ctx.beginPath();
	i_ctx.rect(ofs * i_x, ofs * i_y, pxs, pxs);
	i_ctx.fillStyle = i_c;
	i_ctx.fill();
	i_ctx.closePath();
}

function writeSqXYC(i_ctx, i_x, i_y, c_x, c_y, i_c) {
	var pxs = 45;
	var ofs = 50;

	i_ctx.beginPath();
	i_ctx.rect(ofs * i_x, ofs * i_y, 
		ofs * (c_x - 1) + pxs, ofs * (c_y - 1) + pxs);
	i_ctx.fillStyle = i_c;
	i_ctx.fill();
	i_ctx.closePath();
}



