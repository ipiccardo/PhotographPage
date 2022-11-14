import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footer-text-container">
          <h3>Fotoperiodismo I - Martin Acosta</h3>
          <h3>Agraescuela</h3>
          <h3>Año: 2022</h3>
        </div>
        <div className="footer-svg-container">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 215.000000 234.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,234.000000) scale(0.100000,-0.100000)"
              fill="white"
              stroke="none"
            >
              <path
                d="M200 2230 c0 -5 27 -198 60 -428 33 -229 58 -427 55 -440 -2 -14 1
-22 11 -22 8 0 14 7 14 15 0 7 8 19 18 24 16 10 16 10 0 11 -10 0 -18 5 -18
10 0 6 6 10 14 10 8 0 24 12 36 27 12 16 24 23 28 17 4 -5 13 -9 20 -8 6 1 16
2 22 3 11 1 1 31 -11 31 -4 0 -6 -7 -3 -15 5 -11 2 -13 -10 -9 -20 8 -21 20
-1 28 23 9 43 -3 49 -30 4 -14 11 -22 17 -19 5 4 9 3 8 -2 -3 -20 2 -33 14
-33 6 0 18 -4 26 -9 13 -8 13 -12 0 -27 -13 -17 -13 -17 11 -1 13 9 38 16 55
16 l30 -2 -35 -7 c-28 -6 -30 -8 -10 -9 20 -1 22 -3 10 -11 -11 -7 -1 -10 35
-10 45 -1 48 -2 32 -14 -18 -14 -18 -14 0 -19 12 -3 8 -5 -10 -6 -16 0 -26 3
-23 8 4 5 -4 7 -16 3 -16 -4 -18 -7 -8 -10 53 -16 80 -35 75 -53 -5 -14 -1
-19 12 -19 13 0 15 2 5 9 -11 6 -10 11 4 25 16 16 18 16 36 -3 22 -25 30 -27
22 -6 -4 9 2 18 17 24 16 7 19 10 7 10 -9 1 -19 7 -22 14 -3 6 -4 3 -3 -8 3
-25 -23 -27 -34 -2 -5 9 -13 25 -17 34 -10 20 29 66 65 77 16 5 22 18 27 60 7
61 -2 148 -15 140 -4 -2 -7 8 -6 23 2 23 -2 28 -18 26 -19 -1 -19 -1 -2 12 18
13 17 14 -2 20 -12 3 -18 11 -15 17 5 7 -1 9 -15 5 -16 -4 -21 -2 -18 8 4 9
-1 11 -14 8 -15 -4 -18 -2 -13 11 5 14 2 16 -21 10 -22 -5 -26 -4 -20 6 6 10
4 12 -9 7 -10 -4 -15 -3 -11 3 7 11 -8 14 -19 3 -3 -4 -16 -8 -28 -10 -12 -2
-28 -8 -35 -15 -19 -16 -28 -2 -10 16 8 8 17 12 21 9 3 -4 6 -1 6 5 0 6 -4 14
-10 17 -15 10 -12 23 8 29 10 3 6 4 -8 3 -18 -2 -24 -7 -22 -21 3 -14 1 -16
-10 -6 -15 14 -17 117 -3 112 6 -2 9 -10 7 -19 -2 -11 1 -14 12 -10 9 4 15 3
15 -1 -6 -35 33 -48 94 -31 23 7 46 12 50 11 16 -4 47 19 41 30 -4 7 -3 8 5 4
6 -4 9 -12 6 -17 -4 -5 6 -9 21 -9 27 0 27 1 8 15 -10 8 -15 15 -10 15 5 0 17
-7 26 -15 20 -18 120 -30 139 -16 13 8 13 12 0 27 -13 16 -12 16 9 5 12 -7 20
-17 17 -24 -4 -7 1 -3 9 7 9 11 16 14 16 8 0 -7 12 -12 26 -12 16 0 23 4 18
12 -4 7 -3 8 5 4 6 -4 8 -12 5 -18 -4 -7 7 -8 35 -3 25 4 41 3 41 -3 0 -5 11
-12 25 -14 13 -3 22 -2 20 3 -3 4 0 11 7 15 7 4 10 4 6 -1 -4 -4 0 -14 10 -22
11 -9 11 -12 2 -7 -13 6 -13 5 -1 -7 10 -11 15 -11 18 -1 3 6 11 12 19 12 9 0
12 5 8 12 -4 7 -3 8 4 4 7 -4 12 -2 12 3 0 6 8 11 18 11 14 0 15 -2 2 -10 -8
-5 -11 -10 -7 -10 11 0 67 29 67 36 0 2 -9 0 -21 -6 -11 -7 -23 -9 -26 -6 -6
6 22 36 33 36 4 0 16 8 26 17 18 16 19 16 9 -11 -7 -17 -7 -25 -1 -21 6 3 10
1 10 -4 0 -6 -4 -11 -10 -11 -5 0 -10 -7 -10 -15 0 -8 5 -15 10 -15 14 0 12
-27 -2 -33 -10 -4 -9 -6 1 -6 11 -1 10 -6 -5 -22 -19 -22 -19 -22 3 -11 18 10
20 9 16 -8 -3 -11 -9 -17 -14 -14 -5 3 -9 0 -9 -6 0 -7 9 -14 20 -17 11 -3 17
-9 14 -14 -3 -5 1 -6 9 -3 8 3 20 -2 27 -11 7 -8 9 -15 4 -15 -4 0 1 -7 12
-16 10 -8 13 -13 7 -9 -7 3 -13 4 -13 1 0 -11 37 -75 41 -72 2 2 5 -14 6 -37
3 -42 21 -73 30 -49 3 6 9 9 15 6 6 -4 5 -10 -3 -15 -11 -8 -11 -11 4 -20 21
-12 23 -33 2 -25 -12 4 -14 0 -11 -20 3 -14 10 -31 15 -38 6 -7 8 -21 5 -32
-3 -11 1 -25 8 -31 10 -9 13 4 15 66 1 42 5 100 9 130 l6 54 61 -7 c34 -3 115
-9 180 -13 l117 -6 0 36 c0 33 -2 36 -37 41 -21 3 -85 8 -143 11 -58 3 -121 8
-140 11 l-35 5 7 82 c3 45 7 100 7 122 l1 40 -342 84 c-189 45 -498 121 -687
167 -189 46 -345 84 -347 84 -2 0 -4 -4 -4 -10z m305 -340 c0 -18 -5 -40 -12
-49 -9 -12 -7 -22 10 -45 19 -27 19 -30 4 -41 -22 -16 -21 -22 3 -28 26 -7 26
-26 1 -24 -11 0 -19 4 -19 7 2 18 -4 21 -17 10 -13 -10 -12 -15 8 -31 17 -15
18 -18 4 -13 -13 5 -18 2 -16 -7 4 -24 -13 -70 -25 -66 -6 2 -10 13 -8 23 3
18 3 18 -13 -1 -9 -11 -14 -15 -11 -8 4 6 0 14 -6 17 -11 5 -11 7 0 12 6 3 10
10 6 15 -3 5 2 9 10 9 9 0 16 -5 16 -12 0 -17 10 -4 15 21 2 11 1 21 -3 21 -4
0 -8 18 -8 40 -1 21 3 37 8 34 4 -3 8 1 8 8 0 7 3 24 7 37 5 19 3 22 -8 16 -8
-5 -7 -1 3 10 16 17 16 19 0 32 -9 8 -12 12 -5 8 8 -3 15 4 19 20 9 36 29 26
29 -15z m-35 20 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11
-4 11 -10z m443 -37 c-3 -7 -6 -13 -8 -13 -2 0 -5 6 -8 13 -3 8 1 14 8 14 7 0
11 -6 8 -14z m-248 -5 c5 4 5 1 1 -5 -10 -18 -33 -16 -40 2 -4 12 -2 13 13 6
10 -6 22 -7 26 -3z m-50 -8 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4
10 3 0 8 -4 11 -10z m104 -196 c89 -75 41 -224 -72 -224 -121 0 -177 132 -92
217 29 29 40 33 83 33 40 0 57 -6 81 -26z m-334 -64 c-3 -5 -11 -10 -16 -10
-6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m51 -30 c15 0 15 -21 -1 -32
-15 -11 -22 -10 -29 8 -3 8 -2 12 4 9 6 -3 10 -1 10 4 0 6 -8 11 -17 11 -15 0
-16 2 -3 10 10 6 16 6 18 0 2 -6 10 -10 18 -10z m1049 0 c3 -5 1 -10 -4 -10
-6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-1074 -87 c-9 -16 -10 -14
-11 12 0 21 3 26 11 18 8 -8 8 -16 0 -30z m284 -123 c3 -5 1 -10 -4 -10 -6 0
-11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m25 -60 c0 -32 -17 -31 -18 1 0
16 4 27 9 24 5 -4 9 -15 9 -25z"
              />
              <path
                d="M485 1779 c4 -6 -2 -13 -14 -16 -12 -3 -21 -11 -21 -19 0 -17 27 -7
34 12 3 9 10 12 16 9 6 -3 7 1 4 9 -3 9 -10 16 -16 16 -5 0 -6 -5 -3 -11z"
              />
              <path
                d="M593 1665 c-35 -15 -63 -60 -63 -100 0 -33 26 -85 43 -85 17 0 46 20
29 20 -19 0 -52 61 -52 95 0 23 3 27 10 15 9 -13 12 -13 21 3 13 22 61 47 91
47 19 0 20 2 8 10 -21 13 -49 12 -87 -5z"
              />
              <path
                d="M675 1640 c-3 -6 1 -13 10 -16 21 -8 45 -56 45 -89 0 -15 4 -24 10
-20 15 9 12 72 -5 105 -15 30 -48 40 -60 20z"
              />
              <path
                d="M701 1522 c-14 -25 -60 -52 -93 -53 -23 0 -23 0 2 -10 17 -7 37 -7
61 0 47 14 62 32 51 62 l-9 23 -12 -22z"
              />
              <path
                d="M1693 1938 c-32 -15 -44 -56 -41 -134 l3 -69 33 -3 c31 -3 33 -2 23
17 -14 25 -14 86 -1 112 6 10 20 19 30 19 18 0 20 -7 20 -55 0 -78 20 -120 63
-134 48 -16 84 0 102 44 20 46 19 74 -5 113 -20 32 -20 32 0 32 15 0 20 7 20
29 0 24 -5 29 -31 35 -49 10 -192 6 -216 -6z m172 -83 c27 -26 31 -46 15 -76
-20 -36 -65 -19 -70 26 -8 77 11 95 55 50z"
              />
              <path d="M760 1840 c-13 -8 -12 -10 3 -10 9 0 17 5 17 10 0 12 -1 12 -20 0z" />
              <path
                d="M1256 1821 c5 -17 3 -21 -6 -16 -9 5 -11 4 -6 -3 10 -16 14 -15 27 9
6 13 7 19 1 15 -6 -3 -13 0 -16 6 -3 7 -3 2 0 -11z"
              />
              <path d="M1048 1823 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path
                d="M1000 1810 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3
-15 1 -15 -4z"
              />
              <path
                d="M580 1782 c0 -9 6 -12 16 -8 9 3 27 6 41 6 39 0 20 12 -21 14 -25 1
-36 -3 -36 -12z"
              />
              <path d="M751 1786 c2 -2 18 -6 34 -10 22 -5 26 -4 15 4 -14 9 -59 15 -49 6z" />
              <path
                d="M1217 1778 c7 -8 11 -17 8 -20 -3 -3 2 -11 12 -19 15 -12 16 -12 8 1
-5 8 -10 21 -10 29 0 8 -7 17 -15 19 -12 4 -13 3 -3 -10z"
              />
              <path d="M848 1773 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
              <path
                d="M988 1758 c-19 -19 -15 -21 14 -10 10 4 14 12 10 18 -5 6 -13 4 -24
-8z"
              />
              <path
                d="M1030 1770 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0
-16 -4 -16 -10z"
              />
              <path
                d="M1074 1774 c7 -15 -52 -60 -75 -56 -12 2 -19 -4 -21 -19 -4 -28 -34
-34 -41 -8 -3 10 -11 19 -17 19 -10 0 -10 -3 0 -15 17 -20 5 -19 -16 2 -15 16
-15 17 2 24 14 6 15 8 3 8 -8 1 -24 -6 -35 -14 -19 -15 -19 -15 1 -8 18 6 18
5 6 -10 -12 -15 -11 -17 3 -17 9 0 16 -7 16 -15 0 -8 5 -15 11 -15 5 0 7 5 3
11 -5 8 -1 8 14 0 14 -7 18 -17 15 -31 -5 -20 -7 -20 -24 -4 -11 10 -22 14
-26 11 -3 -4 0 -7 7 -7 7 0 10 -3 7 -6 -3 -4 -2 -15 4 -25 5 -11 6 -19 1 -19
-5 0 -9 -22 -9 -49 -1 -41 3 -51 22 -61 15 -8 22 -20 20 -31 -2 -10 1 -18 8
-16 7 1 11 -7 10 -18 -1 -20 -1 -20 13 -1 11 16 14 17 14 4 0 -17 20 -28 48
-28 15 0 15 2 2 10 -11 7 -5 9 22 7 20 -1 34 -5 32 -9 -3 -4 2 -5 10 -2 9 3
16 10 16 15 0 5 7 9 15 9 8 0 15 -4 15 -9 0 -14 48 0 62 18 12 14 11 14 -4 3
-9 -8 -25 -12 -35 -10 -13 2 -8 9 22 27 22 14 44 24 48 23 5 -2 6 2 3 7 -3 5
1 14 9 21 8 7 12 16 9 21 -3 5 0 9 5 9 6 0 11 4 11 10 0 5 -8 7 -17 4 -17 -5
-17 -5 0 6 9 6 17 19 17 28 0 15 2 15 10 2 8 -12 10 -11 10 8 0 12 -4 22 -9
22 -5 0 -12 18 -16 39 -7 43 -43 92 -72 99 -10 2 -38 6 -63 9 -24 3 -51 13
-58 22 -7 9 -11 11 -8 5z m151 -74 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0
13 -4 16 -10z m-59 -43 c69 -63 55 -170 -28 -207 -99 -44 -194 34 -174 142 6
33 45 80 76 91 44 16 91 7 126 -26z"
              />
              <path
                d="M1056 1664 c-26 -26 -19 -31 38 -26 33 3 56 0 60 -7 4 -6 12 -11 18
-11 19 0 -16 33 -49 47 -41 17 -48 16 -67 -3z"
              />
              <path
                d="M1001 1634 c-34 -44 -26 -114 14 -114 1 0 0 20 -2 44 -3 24 0 53 7
65 17 33 6 36 -19 5z"
              />
              <path
                d="M1158 1560 c3 -37 0 -57 -13 -77 l-18 -28 31 28 c45 43 53 127 12
127 -15 0 -16 -7 -12 -50z"
              />
              <path
                d="M996 1496 c12 -32 124 -65 124 -37 0 5 3 16 6 24 5 13 1 14 -28 5
-26 -8 -42 -7 -70 5 -26 11 -35 12 -32 3z"
              />
              <path d="M1263 1766 c0 -8 8 -14 18 -13 14 1 15 4 7 14 -14 17 -25 16 -25 -1z" />
              <path
                d="M724 1749 c-4 -8 1 -9 15 -4 12 4 28 2 35 -4 9 -8 13 -7 13 4 0 18
-52 21 -63 4z"
              />
              <path d="M830 1756 c0 -2 9 -6 20 -9 11 -3 18 -1 14 4 -5 9 -34 13 -34 5z" />
              <path
                d="M940 1729 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"
              />
              <path
                d="M805 1720 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
              />
              <path
                d="M1260 1720 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"
              />
              <path d="M795 1690 c3 -5 14 -10 23 -10 15 0 15 2 2 10 -20 13 -33 13 -25 0z" />
              <path
                d="M1283 1661 c6 -17 14 -31 18 -31 11 0 -2 38 -16 50 -11 10 -12 6 -2
-19z"
              />
              <path d="M1350 1602 c0 -12 19 -26 26 -19 2 2 -2 10 -11 17 -9 8 -15 8 -15 2z" />
              <path d="M1295 1519 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z" />
              <path
                d="M1693 1509 c-48 -14 -76 -60 -77 -129 -1 -49 3 -63 24 -85 49 -54
131 -70 196 -39 41 20 74 83 74 145 0 72 -8 89 -41 89 -27 0 -29 -2 -22 -27
16 -61 9 -104 -20 -129 -16 -13 -33 -24 -38 -24 -7 0 -8 36 -3 105 l7 105 -34
-1 c-19 0 -48 -5 -66 -10z m43 -90 c-3 -17 -6 -47 -6 -65 0 -23 -5 -34 -14
-34 -46 0 -64 86 -24 114 37 26 51 21 44 -15z"
              />
              <path
                d="M835 1454 c-14 -29 -15 -41 -5 -64 7 -16 18 -31 27 -34 8 -3 11 -12
8 -18 -4 -7 3 -2 14 12 11 14 21 39 22 55 2 29 2 29 12 -7 6 -21 15 -38 20
-38 6 0 7 3 4 6 -3 4 -2 15 4 25 8 15 6 17 -7 12 -14 -5 -16 -1 -12 18 3 15
-2 31 -11 39 -13 13 -14 12 -8 -5 7 -20 7 -20 -8 -1 -8 11 -15 23 -15 28 0 22
-30 4 -45 -28z"
              />
              <path
                d="M1380 1460 c8 -5 22 -10 30 -10 13 0 13 1 0 10 -8 5 -22 10 -30 10
-13 0 -13 -1 0 -10z"
              />
              <path
                d="M469 1445 c-1 -6 -1 -13 0 -17 0 -5 -5 -7 -11 -5 -7 1 -13 -5 -13
-13 0 -8 -4 -18 -10 -22 -5 -4 -6 -10 -2 -14 3 -4 14 -1 24 7 11 9 14 10 9 2
-4 -8 -1 -13 9 -13 9 0 13 -4 10 -10 -3 -5 -1 -10 4 -10 14 0 14 17 1 25 -8 5
-7 11 0 20 9 11 8 20 -4 37 -9 12 -17 18 -17 13z"
              />
              <path
                d="M1265 1420 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
              />
              <path d="M1437 1399 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z" />
              <path
                d="M778 1393 c-9 -2 -19 -10 -22 -18 -3 -9 0 -12 10 -8 7 3 14 0 14 -7
0 -21 23 -4 25 18 1 12 -1 21 -4 21 -3 -1 -13 -3 -23 -6z"
              />
              <path d="M1280 1385 c-7 -9 -11 -17 -9 -20 3 -2 10 5 17 15 14 24 10 26 -8 5z" />
              <path d="M1229 1373 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
              <path
                d="M350 1356 c0 -2 7 -6 15 -10 8 -3 15 -1 15 4 0 6 -7 10 -15 10 -8 0
-15 -2 -15 -4z"
              />
              <path
                d="M424 1345 c3 -9 0 -15 -9 -15 -8 0 -15 -5 -15 -10 0 -7 6 -7 20 0 16
9 19 40 3 40 -3 0 -3 -7 1 -15z"
              />
              <path
                d="M1275 1340 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z"
              />
              <path
                d="M481 1323 c-1 -12 -6 -23 -13 -25 -7 -3 -8 -7 -2 -11 20 -12 35 8 25
34 -9 23 -10 23 -10 2z"
              />
              <path
                d="M1135 1330 c-3 -5 -13 -6 -22 -3 -10 4 -14 2 -10 -4 4 -6 1 -14 -5
-16 -9 -4 -7 -6 3 -6 9 -1 24 8 34 19 10 11 15 20 12 20 -3 0 -8 -4 -12 -10z"
              />
              <path
                d="M1455 1330 c-4 -6 -14 -10 -24 -10 -21 0 -73 -39 -53 -40 6 0 12 5
12 10 0 6 5 10 11 10 5 0 7 -5 3 -12 -5 -8 2 -9 26 -5 18 4 44 7 57 7 17 0 24
5 21 16 -4 20 -45 38 -53 24z m32 -16 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11
1 17 -2 13 -5z m-57 -14 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4
10 6 0 11 -4 11 -10z"
              />
              <path
                d="M308 1313 c-29 -18 -45 -43 -27 -43 5 0 12 7 15 15 4 8 10 12 16 9 5
-3 4 -12 -4 -22 -12 -14 -9 -15 20 -9 19 4 31 3 27 -2 -3 -5 0 -13 6 -17 7 -4
9 -3 5 4 -3 5 0 13 6 15 9 4 9 6 1 6 -6 1 -9 11 -7 24 2 12 2 17 -2 10 -8 -17
-34 -5 -27 13 7 18 4 17 -29 -3z"
              />
              <path d="M988 1323 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path
                d="M982 1297 c10 -8 15 -17 11 -20 -3 -4 1 -7 10 -7 8 0 17 -5 19 -11 2
-7 12 0 21 15 l18 27 -33 -3 c-19 -1 -40 2 -48 6 -8 4 -7 1 2 -7z"
              />
              <path
                d="M406 1275 c-10 -15 -12 -26 -6 -30 6 -3 10 -1 10 5 0 6 6 10 13 9 40
-5 51 13 18 30 -15 9 -22 6 -35 -14z"
              />
              <path
                d="M1200 1288 c0 -4 -9 -8 -20 -8 -22 0 -26 -10 -9 -27 18 -18 68 4 62
26 -4 17 -33 26 -33 9z"
              />
              <path d="M1258 1293 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path
                d="M500 1274 c-11 -13 -9 -19 13 -42 23 -22 27 -24 27 -9 0 10 -4 15
-10 12 -13 -8 -13 11 0 36 13 24 -11 27 -30 3z"
              />
              <path
                d="M1110 1280 c-23 -7 -23 -8 -3 -9 12 -1 25 4 28 9 3 6 5 10 3 9 -2 -1
-14 -5 -28 -9z"
              />
              <path
                d="M580 1258 c17 -18 22 -20 33 -8 7 7 7 10 1 7 -7 -4 -17 0 -24 8 -7 8
-17 15 -22 15 -5 0 0 -10 12 -22z"
              />
              <path
                d="M1305 1261 l20 -24 -20 6 c-20 7 -20 7 -1 -8 11 -8 24 -15 28 -15 12
0 -7 34 -29 51 -15 11 -14 9 2 -10z"
              />
              <path d="M1540 1266 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
              <path
                d="M447 1244 c-22 -12 -25 -18 -17 -33 5 -10 6 -21 3 -25 -3 -3 0 -6 8
-6 12 0 12 -2 0 -9 -7 -5 -10 -14 -6 -21 12 -20 25 10 19 47 -4 26 -1 32 15
35 13 2 18 7 13 15 -5 8 -14 7 -35 -3z"
              />
              <path d="M1085 1242 c-43 -9 -40 -23 5 -20 25 2 45 7 45 12 0 11 -22 14 -50 8z" />
              <path
                d="M297 1228 c-19 -15 -37 -75 -18 -64 6 4 11 1 11 -6 0 -7 8 -4 21 9
12 11 18 26 15 32 -10 15 -28 3 -20 -12 4 -7 1 -7 -7 1 -12 11 -10 16 11 32
14 11 20 20 14 20 -5 0 -18 -6 -27 -12z"
              />
              <path
                d="M1010 1227 c0 -7 5 -18 12 -25 10 -10 5 -11 -20 -6 -38 8 -45 -12 -7
-22 34 -8 59 2 51 22 -3 9 -6 22 -6 30 0 8 -7 14 -15 14 -8 0 -15 -6 -15 -13z"
              />
              <path d="M1200 1220 c-12 -8 -10 -10 8 -10 13 0 20 4 17 10 -7 12 -6 12 -25 0z" />
              <path d="M1285 1197 c15 -21 30 -35 33 -32 3 3 -9 20 -27 38 l-34 32 28 -38z" />
              <path
                d="M1528 1211 c-26 -17 -26 -17 -6 -30 13 -8 18 -8 13 -1 -4 6 1 20 11
31 21 23 18 23 -18 0z"
              />
              <path
                d="M657 1200 c5 -20 23 -28 23 -10 0 5 8 7 18 3 11 -4 14 -3 7 4 -5 6
-20 14 -32 17 -18 6 -20 4 -16 -14z"
              />
              <path
                d="M1606 1195 c-3 -9 -6 -27 -6 -40 0 -22 5 -24 78 -30 42 -3 90 -11
105 -17 46 -18 61 -63 30 -94 -15 -14 -30 -16 -120 -10 l-103 7 0 -40 c0 -40
1 -41 33 -41 17 0 69 -3 114 -6 81 -7 82 -7 112 24 25 25 31 39 31 74 0 24 -7
53 -15 64 -18 24 -19 35 -1 28 8 -3 16 4 20 18 14 55 14 55 -111 62 -65 4
-128 10 -139 12 -14 4 -23 0 -28 -11z"
              />
              <path
                d="M480 1194 c0 -14 27 -50 33 -44 3 3 -3 16 -13 30 -11 14 -20 20 -20
14z"
              />
              <path d="M740 1196 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
              <path
                d="M1110 1174 c0 -10 -6 -14 -15 -10 -8 3 -15 1 -15 -4 0 -18 41 -22 59
-6 10 9 20 15 22 14 2 -2 -2 3 -10 10 -21 17 -41 15 -41 -4z"
              />
              <path
                d="M1260 1187 c0 -3 16 -22 35 -43 20 -21 35 -32 35 -23 0 7 -16 27 -35
42 -19 15 -35 26 -35 24z"
              />
              <path
                d="M770 1150 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5 0
-9 -4 -9 -10z"
              />
              <path d="M928 1148 c5 -5 16 -8 23 -6 8 3 3 7 -10 11 -17 4 -21 3 -13 -5z" />
              <path
                d="M300 1124 c-6 -14 -8 -30 -4 -35 9 -15 31 -10 38 7 4 12 2 15 -9 10
-12 -4 -14 0 -9 19 8 33 -4 32 -16 -1z"
              />
              <path
                d="M680 1132 c0 -6 9 -12 20 -15 11 -3 20 -3 20 -1 0 2 -9 8 -20 14 -11
6 -20 7 -20 2z"
              />
              <path
                d="M1520 1130 c-8 -5 -18 -6 -23 -3 -5 3 -1 -9 7 -26 20 -37 25 -39 19
-7 -4 18 0 25 14 28 10 2 14 6 8 10 -6 4 -17 3 -25 -2z"
              />
              <path
                d="M445 1121 c-3 -2 -5 -8 -5 -13 0 -13 27 -9 40 6 9 12 8 15 -10 13
-11 -1 -23 -3 -25 -6z"
              />
              <path
                d="M520 1120 c-12 -8 -12 -10 2 -15 19 -7 38 1 38 16 0 12 -21 11 -40
-1z"
              />
              <path
                d="M615 1120 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
-4 -4 -10z"
              />
              <path d="M888 1123 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path
                d="M780 1111 c-8 -6 -19 -7 -25 -4 -5 3 -3 -2 7 -12 17 -19 68 -15 68 6
0 6 -6 6 -19 -1 -29 -15 -38 -12 -15 5 21 16 8 20 -16 6z"
              />
              <path
                d="M1030 1105 c0 -8 -8 -15 -17 -15 -13 0 -14 -3 -6 -11 16 -16 43 -3
43 21 0 11 -4 20 -10 20 -5 0 -10 -7 -10 -15z"
              />
              <path
                d="M1193 1107 c0 -7 6 -18 14 -25 10 -10 13 -10 13 1 0 8 -6 20 -13 26
-10 8 -14 7 -14 -2z"
              />
              <path
                d="M843 1095 c0 -8 4 -12 9 -9 4 3 8 9 8 15 0 5 -4 9 -8 9 -5 0 -9 -7
-9 -15z"
              />
              <path
                d="M926 1103 c-8 -8 -13 -10 -43 -12 -9 0 -13 -4 -9 -8 12 -12 46 -10
58 4 12 14 6 28 -6 16z"
              />
              <path
                d="M1296 1095 c-3 -8 -1 -14 4 -12 5 1 16 -7 25 -18 15 -18 15 -18 0 13
-18 36 -21 38 -29 17z"
              />
              <path
                d="M344 1081 c-40 -24 -50 -41 -33 -52 19 -12 29 -11 29 2 0 5 -6 7 -12
3 -7 -4 -4 2 6 14 21 25 36 31 16 7 -10 -12 -10 -15 3 -15 8 0 20 7 27 15 10
12 10 15 -1 15 -8 0 -5 6 7 15 29 22 -4 19 -42 -4z"
              />
              <path
                d="M480 1080 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
              />
              <path
                d="M580 1070 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"
              />
              <path
                d="M1190 1055 c34 -25 67 -34 55 -15 -3 6 -13 10 -21 10 -9 0 -22 7 -30
15 -9 8 -20 15 -27 15 -6 0 4 -11 23 -25z"
              />
              <path
                d="M655 1060 c3 -6 1 -10 -5 -10 -6 0 -8 -4 -5 -10 9 -14 22 -12 28 4 3
8 -1 17 -9 20 -9 3 -12 1 -9 -4z"
              />
              <path d="M837 1048 c6 -11 41 -10 48 2 3 5 -7 8 -24 7 -16 -1 -27 -5 -24 -9z" />
              <path
                d="M1496 1048 c3 -4 9 -8 15 -8 5 0 9 4 9 8 0 5 -7 9 -15 9 -8 0 -12 -4
-9 -9z"
              />
              <path
                d="M466 1025 c4 -8 11 -15 16 -15 6 0 5 6 -2 15 -7 8 -14 15 -16 15 -2
0 -1 -7 2 -15z"
              />
              <path
                d="M526 1031 c-3 -5 1 -14 8 -21 12 -9 17 -7 26 9 9 18 8 21 -9 21 -11
0 -22 -4 -25 -9z"
              />
              <path d="M1088 1033 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
              <path d="M690 1020 c0 -14 15 -19 29 -11 9 6 7 10 -8 14 -12 3 -21 1 -21 -3z" />
              <path
                d="M1298 1023 c6 -2 10 -9 7 -14 -4 -5 1 -6 10 -2 13 5 14 7 3 14 -7 5
-17 8 -23 8 -5 0 -4 -3 3 -6z"
              />
              <path
                d="M620 1001 c-8 -16 -5 -20 15 -24 32 -6 37 3 14 25 -18 17 -19 17 -29
-1z"
              />
              <path
                d="M1146 1008 c-7 -22 -3 -47 6 -42 5 3 6 14 3 25 -4 11 -2 19 4 19 6 0
11 -4 11 -10 0 -5 10 -10 23 -10 20 0 20 1 -7 15 -34 18 -36 18 -40 3z"
              />
              <path
                d="M765 992 c3 -8 5 -16 5 -18 0 -12 41 -1 49 14 8 15 4 17 -25 17 -24
0 -33 -4 -29 -13z"
              />
              <path
                d="M1046 1002 c6 -4 16 -16 23 -27 9 -15 11 -16 7 -2 -7 21 3 22 32 1
12 -8 22 -11 22 -6 0 9 -64 42 -83 42 -8 0 -9 -3 -1 -8z"
              />
              <path
                d="M310 975 c0 -14 4 -25 10 -25 5 0 7 -6 4 -14 -3 -8 1 -20 9 -27 7 -7
12 -23 9 -35 -2 -12 8 -44 23 -70 30 -56 45 -74 45 -57 0 7 -4 14 -9 17 -5 4
-12 24 -16 46 -4 22 -11 37 -17 34 -11 -7 -7 28 6 37 13 10 -3 49 -20 49 -8 0
-14 6 -13 13 3 25 -1 38 -11 32 -5 -3 -10 -2 -10 4 0 5 6 12 13 14 7 3 5 6 -5
6 -13 1 -18 -7 -18 -24z"
              />
              <path
                d="M510 990 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4
-4 -4 -10z"
              />
              <path
                d="M1381 978 c1 -19 2 -20 6 -4 4 15 7 16 15 5 8 -12 9 -12 6 0 -7 25
-28 24 -27 -1z"
              />
              <path
                d="M1490 986 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"
              />
              <path
                d="M1296 948 c3 -10 10 -18 15 -18 5 0 9 -4 9 -10 0 -5 -6 -10 -14 -10
-8 0 -17 -11 -20 -25 -8 -31 -15 -31 -52 -3 -26 20 -27 20 -11 2 9 -11 17 -31
17 -43 0 -19 -4 -22 -22 -18 -22 6 -22 5 -4 -8 21 -16 36 -12 36 9 0 8 9 16
20 19 11 3 20 13 20 22 0 14 2 14 24 -2 13 -10 21 -22 18 -27 -3 -5 0 -6 6 -2
34 21 91 -42 86 -96 -3 -33 13 -38 19 -5 4 15 5 12 4 -8 -1 -18 -7 -29 -14
-28 -7 2 -10 -3 -7 -11 4 -11 -4 -14 -30 -12 -23 1 -36 -3 -36 -11 0 -7 6 -13
13 -13 22 0 -17 -20 -40 -20 -20 0 -23 -5 -23 -36 0 -31 -3 -35 -17 -29 -10 4
-26 10 -35 12 -10 3 -18 10 -18 16 0 6 -7 4 -16 -4 -8 -9 -16 -36 -17 -60 l-2
-44 42 -6 c52 -7 68 -19 25 -19 -45 0 -101 29 -99 52 1 10 5 18 9 18 4 0 8 4
8 9 0 5 -8 7 -19 4 -10 -2 -26 3 -36 13 -17 17 -17 16 -12 -24 2 -23 10 -49
17 -57 11 -13 0 -15 -89 -15 -72 0 -100 3 -95 11 5 8 1 8 -14 0 -11 -6 -46
-11 -77 -11 -50 0 -56 2 -50 18 12 30 13 47 2 67 -6 11 -10 23 -9 28 3 9 -20
9 -33 -1 -5 -4 -16 -18 -24 -32 l-14 -25 25 23 c13 12 27 22 30 22 13 0 17
-34 6 -48 -7 -8 -13 -22 -13 -31 0 -10 -10 -17 -25 -19 -24 -2 -24 -2 -6 13
11 8 17 17 15 20 -8 7 -49 -7 -44 -15 6 -10 -54 -25 -62 -16 -4 3 1 6 10 6 28
0 51 37 52 79 0 21 -3 37 -8 34 -4 -2 -10 2 -13 11 -5 14 -13 14 -63 0 -17 -5
-22 -4 -17 4 4 8 -5 10 -31 9 -21 -2 -49 3 -63 10 -14 7 -38 17 -53 23 -16 5
-25 15 -22 20 4 6 0 24 -9 40 -16 34 -11 38 16 13 17 -15 18 -15 18 5 0 11 -3
27 -6 36 -7 18 -24 22 -24 5 0 -7 -8 -17 -17 -24 -16 -12 -14 -35 30 -346 26
-183 49 -334 51 -336 3 -3 816 107 903 122 30 5 32 9 37 58 15 138 47 620 42
633 -7 19 -36 18 -36 -1 0 -18 16 -20 23 -2 3 7 6 5 6 -5 1 -10 -5 -18 -12
-18 -7 0 -22 8 -33 18 -24 21 -104 66 -104 57 0 -3 -11 7 -25 22 -15 17 -23
21 -19 11z m124 -292 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10
8 0 15 -2 15 -4z m-707 -111 c10 -19 9 -19 -10 -2 -11 9 -30 17 -42 17 -13 0
-20 4 -15 11 3 6 15 9 25 6 11 -3 19 0 20 6 0 7 3 5 6 -3 3 -8 10 -24 16 -35z
m537 12 c-14 -8 -27 -12 -30 -10 -7 6 23 23 40 23 8 0 4 -6 -10 -13z m-50 -93
c0 -2 -7 -4 -15 -4 -8 0 -15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z m-350
-49 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z
m58 3 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m52 -3 c0 -8
-7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m60 0 c0
-8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m52 0
c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z
m-171 -35 c21 -12 26 -56 8 -62 -8 -3 -7 -14 5 -35 20 -40 20 -43 -2 -43 -10
0 -22 12 -29 30 -6 17 -16 30 -22 30 -6 0 -11 -13 -11 -30 0 -20 -5 -30 -15
-30 -12 0 -15 15 -15 75 l0 75 31 0 c17 0 39 -5 50 -10z m167 -7 c2 -9 -8 -13
-30 -13 -41 0 -58 -15 -58 -50 0 -30 17 -50 42 -50 11 0 18 7 18 20 0 12 -7
20 -16 20 -9 0 -14 6 -12 12 3 7 15 12 29 12 21 1 24 -5 27 -40 3 -36 0 -42
-20 -46 -13 -2 -37 -1 -54 4 -57 14 -69 99 -20 134 24 17 87 15 94 -3z m-288
-19 c6 -14 10 -46 10 -71 0 -39 -2 -45 -19 -40 -10 2 -25 0 -34 -4 -9 -5 -26
-5 -41 1 -52 19 -19 90 42 90 15 0 22 5 19 13 -2 7 -19 12 -41 11 -34 -1 -44
5 -29 19 3 4 24 7 45 7 32 0 40 -4 48 -26z m410 17 c0 -5 -11 -12 -24 -15 -25
-6 -36 -31 -36 -83 0 -20 -5 -33 -12 -33 -10 0 -12 19 -10 68 l4 69 39 1 c21
1 39 -2 39 -7z m118 -3 c7 -7 12 -38 12 -69 l0 -57 -37 -4 c-53 -6 -72 1 -79
28 -8 32 10 52 52 60 43 8 39 29 -4 29 -31 0 -39 5 -25 18 11 12 68 8 81 -5z
m-458 -173 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7
15 -15z m58 3 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m52
-3 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z
m60 0 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 -7 15
-15z m58 3 c-6 -18 -25 -20 -31 -3 -5 10 0 15 14 15 12 0 19 -5 17 -12z"
              />
              <path d="M850 340 c0 -22 7 -25 29 -11 16 10 6 31 -15 31 -8 0 -14 -9 -14 -20z" />
              <path d="M700 280 c0 -25 45 -28 54 -4 9 23 8 24 -24 24 -23 0 -30 -4 -30 -20z" />
              <path
                d="M1234 289 c-3 -6 -2 -15 4 -21 15 -15 46 -5 50 15 3 12 -3 17 -22 17
-14 0 -28 -5 -32 -11z"
              />
              <path
                d="M707 940 c13 -13 46 -16 49 -5 2 6 -10 11 -27 11 -17 1 -27 -2 -22
-6z"
              />
              <path
                d="M960 936 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3
-10 -1 -10 -9z"
              />
              <path
                d="M1240 943 c0 -6 8 -17 18 -24 16 -13 16 -13 2 6 -8 11 -16 22 -17 24
-2 2 -3 0 -3 -6z"
              />
              <path
                d="M629 927 c14 -18 61 -23 61 -7 0 6 -9 10 -19 10 -11 0 -28 3 -38 7
-16 6 -16 5 -4 -10z"
              />
              <path
                d="M890 908 c0 -18 -2 -20 -10 -8 -8 13 -10 12 -10 -2 0 -10 -5 -18 -11
-18 -6 0 -9 9 -6 19 3 14 0 19 -13 18 -11 -1 -16 -6 -12 -16 5 -14 4 -14 -45
6 -7 3 -11 -4 -10 -17 1 -17 6 -21 25 -17 16 3 22 0 18 -8 -3 -10 2 -11 23 -5
62 17 90 47 61 65 -6 3 -10 -4 -10 -17z"
              />
              <path d="M412 900 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
              <path d="M1157 884 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z" />
              <path
                d="M1574 843 c-15 -104 42 -173 143 -173 90 0 132 34 148 123 11 58 0
87 -33 87 -26 0 -27 -2 -24 -38 5 -56 -26 -92 -82 -92 -29 0 -52 7 -71 22 -25
19 -27 26 -22 70 6 48 6 48 -23 48 -27 0 -29 -3 -36 -47z"
              />
              <path d="M537 870 c-12 -33 -15 -77 -7 -90 6 -9 10 1 15 33 7 48 2 85 -8 57z" />
              <path d="M1045 869 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z" />
              <path
                d="M401 843 c0 -11 3 -13 6 -5 2 6 10 9 15 6 7 -4 8 -2 4 4 -11 18 -26
14 -25 -5z"
              />
              <path
                d="M560 814 c-7 -19 -10 -38 -7 -41 6 -5 37 50 37 67 0 24 -19 7 -30
-26z"
              />
              <path d="M770 840 c8 -5 22 -9 30 -9 10 0 8 3 -5 9 -27 12 -43 12 -25 0z" />
              <path
                d="M910 841 c12 -9 9 -11 -14 -11 -16 0 -26 -3 -22 -7 4 -5 18 -8 29 -8
16 0 21 -5 19 -18 -3 -18 14 -19 34 -2 15 13 6 35 -12 28 -9 -3 -14 0 -12 8 2
7 -6 14 -17 16 -16 3 -17 2 -5 -6z"
              />
              <path d="M626 818 c-8 -33 -7 -86 2 -92 9 -6 12 8 12 68 0 47 -5 56 -14 24z" />
              <path
                d="M1125 806 c-3 -9 -7 -23 -10 -31 -2 -8 0 -17 4 -20 5 -2 11 10 14 28
5 35 1 50 -8 23z"
              />
              <path
                d="M1360 808 c0 -7 12 -24 25 -37 29 -27 31 -22 10 19 -16 31 -35 40
-35 18z"
              />
              <path d="M601 794 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
              <path d="M681 794 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
              <path
                d="M710 774 c12 -51 20 -54 20 -6 0 29 -4 42 -14 42 -11 0 -12 -8 -6
-36z"
              />
              <path d="M1180 796 c0 -8 4 -17 9 -21 6 -3 9 4 8 15 -1 23 -17 28 -17 6z" />
              <path
                d="M1321 784 c8 -10 21 -31 29 -48 8 -17 23 -32 33 -32 17 -2 17 -1 1
25 -23 37 -56 71 -67 71 -5 0 -3 -7 4 -16z"
              />
              <path
                d="M769 788 c-7 -25 -4 -34 12 -34 12 0 19 7 19 18 0 10 -7 18 -15 18
-8 0 -15 -1 -16 -2z"
              />
              <path d="M586 752 c-4 -13 -5 -26 -2 -29 10 -11 18 4 14 29 l-4 23 -8 -23z" />
              <path
                d="M810 718 c0 -29 5 -60 10 -68 7 -11 10 5 10 53 0 38 -4 67 -10 67 -5
0 -10 -24 -10 -52z"
              />
              <path d="M844 734 c-4 -14 -2 -40 4 -57 9 -30 10 -28 11 26 1 61 -5 73 -15 31z" />
              <path
                d="M497 744 c-18 -19 -5 -65 29 -101 l35 -38 -18 32 c-10 18 -21 33 -25
33 -3 0 -4 8 -2 18 6 21 -9 66 -19 56z"
              />
              <path
                d="M650 741 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3
-10 2 -10 -4z"
              />
              <path
                d="M930 735 c0 -8 5 -15 10 -15 6 0 10 7 10 15 0 8 -4 15 -10 15 -5 0
-10 -7 -10 -15z"
              />
              <path d="M1011 714 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
              <path
                d="M734 660 c3 -30 5 -68 6 -85 0 -22 3 -26 9 -15 9 15 -4 138 -15 149
-3 3 -3 -19 0 -49z"
              />
              <path d="M782 690 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
              <path
                d="M927 690 c3 -11 7 -20 9 -20 2 0 4 9 4 20 0 11 -4 20 -9 20 -5 0 -7
-9 -4 -20z"
              />
              <path
                d="M1130 703 c-3 -17 -3 -45 0 -85 l2 -33 10 37 c7 25 6 47 0 65 -6 15
-11 22 -12 16z"
              />
              <path d="M580 683 c0 -13 5 -23 10 -23 13 0 13 11 0 30 -8 12 -10 11 -10 -7z" />
              <path d="M610 691 c0 -5 7 -12 16 -15 14 -5 15 -4 4 9 -14 17 -20 19 -20 6z" />
              <path d="M1163 662 c2 -23 7 -46 11 -49 3 -3 3 14 0 38 -8 57 -18 67 -11 11z" />
              <path d="M471 664 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
              <path
                d="M1562 621 c-4 -9 -7 -45 -7 -79 0 -57 3 -66 28 -88 52 -44 104 -25
132 50 19 49 39 63 62 44 15 -12 14 -65 -1 -100 -6 -13 -2 -19 19 -24 14 -3
29 -3 33 0 4 4 8 41 10 81 4 72 3 76 -26 105 -51 51 -98 38 -137 -40 -13 -27
-30 -52 -36 -56 -15 -9 -41 25 -35 45 17 64 16 69 -10 74 -18 3 -28 -1 -32
-12z"
              />
              <path
                d="M1021 620 c1 -8 5 -26 9 -40 l8 -25 1 25 c0 14 -4 32 -9 40 -9 13
-10 13 -9 0z"
              />
              <path
                d="M910 611 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3
-10 2 -10 -4z"
              />
              <path
                d="M817 590 c3 -11 7 -20 9 -20 2 0 4 9 4 20 0 11 -4 20 -9 20 -5 0 -7
-9 -4 -20z"
              />
              <path d="M845 597 c-4 -10 -5 -21 -1 -24 10 -10 18 4 13 24 -4 17 -4 17 -12 0z" />
              <path
                d="M1605 390 c-11 -4 -31 -20 -45 -35 -21 -22 -25 -36 -25 -91 0 -63 2
-67 37 -99 63 -58 171 -57 218 2 30 38 44 100 34 153 -8 39 -13 45 -36 48 -27
3 -27 3 -21 -47 8 -69 -2 -98 -39 -117 l-31 -16 6 106 6 106 -42 -1 c-23 0
-51 -4 -62 -9z m45 -125 c0 -45 -4 -65 -12 -65 -51 1 -74 94 -29 120 35 20 41
12 41 -55z"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Footer;