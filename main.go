package main

import "fmt"

type Cube struct {
	N int
	Px [][][]byte // i x y
}

func MkCube(n int) Cube {
	var c Cube
	c.N = n
	c.Px = make([][][]byte, 6)

	for i := 0; i < 6; i++ {
		c.Px[i] = make([][]byte, n)
		for x := 0; x < n; x++ {
			c.Px[i][x] = make([]byte, n)
			for y := 0; y < n; y++ {
				c.Px[i][x][y] = byte(i)
			}
		}
	}

	return c
}

func (this *Cube) Show() {
	//TOP
	for y := 0; y < this.N; y++ {
		for x := 0; x < this.N; x++ {
			fmt.Printf(PutSq(this.Px[0][x][y]) + " ")
		}
		fmt.Printf("\n")
	}
	//SIDE
	for y := 0; y < this.N; y++ {
		for i := 0; i < 4; i++ {
			for x := 0; x < this.N; x++ {
				fmt.Printf(PutSq(this.Px[i+1][x][y]) + " ")
			}
		}
		fmt.Printf("\n")
	}
	//BOTTOM
	for y := 0; y < this.N; y++ {
		for x := 0; x < this.N; x++ {
			fmt.Printf(PutSq(this.Px[5][x][y]) + " ")
		}
		fmt.Printf("\n")
	}
}

func (this *Cube) Slide_xp(n int) {
	cache := make([]byte, this.N)

	for x := 0; x < this.N; x++ {
		cache[x] = this.Px[4][x][n]
		this.Px[4][x][n] = this.Px[3][x][n]
		this.Px[3][x][n] = this.Px[2][x][n]
		this.Px[2][x][n] = this.Px[1][x][n]
		this.Px[1][x][n] = cache[x]
	}
}

func (this *Cube) Slide_yp(n int) {
	cache := make([]byte, this.N)

	for y := 0; y < this.N; y++ {
		cache[y] = this.Px[4][n][y]
		this.Px[4][n][y] = this.Px[3][n][y]
		this.Px[3][n][y] = this.Px[2][n][y]
		this.Px[2][n][y] = this.Px[1][n][y]
		this.Px[1][n][y] = cache[n]
	}
}

func PutSq(c byte) string {
	if c == 0 {
		return fmt.Sprintf("\x1b[33m%s\x1b[0m", "■")
	} else if c == 1 {
		return fmt.Sprintf("\x1b[34m%s\x1b[0m", "■")
	} else if c == 2 {
		return fmt.Sprintf("\x1b[31m%s\x1b[0m", "■")
	} else if c == 3 {
		return fmt.Sprintf("\x1b[32m%s\x1b[0m", "■")
	} else if c == 4 {
		return fmt.Sprintf("\x1b[35m%s\x1b[0m", "■")
	} else {
		return fmt.Sprintf("■")
	}
}

func main() {
	c := MkCube(3)
	c.Show()
	c.Slide_xp(2)
	c.Show()

}
