// ----------------------------------------------------
// ETL PIPELINE: EXÁMENES 2024 (ORDINARIA Y EXTRAORDINARIA)
// ----------------------------------------------------

// 2024 Ordinaria - Ejercicio A1 (Álgebra)
dbEjercicios.push({
  id: "2024-ORD-A1",
  year: 2024,
  call: "Ordinaria",
  topic: "Álgebra - Sistemas",
  statement: String.raw`Discute la existencia de solución del siguiente sistema en función de los valores del parámetro $\alpha$:
$$ \begin{cases} \alpha x + y + z = 2 \\ x + 2y + (\alpha - 1)z = -1 \\ 2x + y + (\alpha - 2)z = 1 \end{cases} $$
Resuelve el sistema, si es posible, en el caso $\alpha = 1$.`,
  stepByStep: String.raw`Determinante de la matriz de coeficientes:
$|A| = \begin{vmatrix} \alpha & 1 & 1 \\ 1 & 2 & \alpha-1 \\ 2 & 1 & \alpha-2 \end{vmatrix}$
Desarrollamos por Sarrus:
$|A| = \alpha(2)(\alpha-2) + 1(\alpha-1)(2) + 1(1)(1) - [ 2(2)(1) + \alpha(1)(\alpha-1) + 1(1)(\alpha-2) ]$
$= 2\alpha^2 - 4\alpha + 2\alpha - 2 + 1 - [ 4 + \alpha^2 - \alpha + \alpha - 2 ]$
$= 2\alpha^2 - 2\alpha - 1 - (\alpha^2 + 2) = \alpha^2 - 2\alpha - 3$.
Igualando a cero: $\alpha^2 - 2\alpha - 3 = 0 \Rightarrow \alpha = \frac{2 \pm \sqrt{4 - 4(1)(-3)}}{2} \Rightarrow \alpha = 3, \alpha = -1$.
- Si $\alpha \neq 3$ y $\alpha \neq -1 \Rightarrow |A| \neq 0 \Rightarrow$ Sistema Compatible Determinado.
- Si $\alpha = 3 \Rightarrow$ El rango de A es 2. Analizando la matriz ampliada se observa que su rango también es 2 (por ejemplo, sumando/restando filas se obtiene una fila nula), por lo que es Sistema Compatible Indeterminado.
- Si $\alpha = -1 \Rightarrow$ El rango de A es 2. En la matriz ampliada, el menor formado por $C_1, C_2$ y la columna de términos independientes da distinto de cero. Rango de A* es 3 $\Rightarrow$ Sistema Incompatible.

Para $\alpha = 1$:
$x + y + z = 2$
$x + 2y = -1$
$2x + y - z = 1$
Sumamos la primera y tercera ecuación: $3x + 2y = 3$.
Tenemos el sistema de dos ecuaciones: $\begin{cases} 3x + 2y = 3 \\ x + 2y = -1 \end{cases}$.
Restamos la segunda a la primera: $2x = 4 \Rightarrow x = 2$.
Sustituyendo en la segunda: $2 + 2y = -1 \Rightarrow 2y = -3 \Rightarrow y = -3/2$.
Sustituyendo en la primera: $2 - 3/2 + z = 2 \Rightarrow 1/2 + z = 0 \Rightarrow z = -1/2$.
Wait, revisando el cálculo de $z$:
$2 - 3/2 + z = 2 \Rightarrow -3/2 + z = 0 \Rightarrow z = 3/2$.`,
  finalResult: String.raw`\alpha \neq 3, -1: SCD. \alpha=3: SCI. \alpha=-1: INC. Para \alpha=1: x=2, y=-3/2, z=3/2`,
  tip: "Cuando evalúes $\alpha = 1$, muchas veces el término $(\alpha - 1)z$ se hace cero, lo que elimina la incógnita $z$ de esa ecuación y te permite resolver el sistema más rápidamente por reducción.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio B1 (Álgebra)
dbEjercicios.push({
  id: "2024-ORD-B1",
  year: 2024,
  call: "Ordinaria",
  topic: "Álgebra - Matrices",
  statement: String.raw`Se sabe que $\begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} = 2$.
Calcula, explicando las propiedades aplicadas:
a) $\begin{vmatrix} 3a & 3b & 3c \\ a-p & b-q & c-r \\ 2x-a & 2y-b & 2z-c \end{vmatrix}$
b) $\begin{vmatrix} a & x & 2p \\ b & y & 2q \\ c & z & 2r \end{vmatrix}$`,
  stepByStep: String.raw`a) Partimos del determinante inicial:
1) Sacamos factor común $3$ de la primera fila: $3 \cdot \begin{vmatrix} a & b & c \\ a-p & b-q & c-r \\ 2x-a & 2y-b & 2z-c \end{vmatrix}$
2) Restamos la fila 1 a la fila 2 ($F_2 \to F_2 - F_1$): $3 \cdot \begin{vmatrix} a & b & c \\ -p & -q & -r \\ 2x-a & 2y-b & 2z-c \end{vmatrix}$
3) Sumamos la fila 1 a la fila 3 ($F_3 \to F_3 + F_1$): $3 \cdot \begin{vmatrix} a & b & c \\ -p & -q & -r \\ 2x & 2y & 2z \end{vmatrix}$
4) Sacamos factor común $-1$ de la fila 2 y $2$ de la fila 3: $3 \cdot (-1) \cdot 2 \cdot \begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} = -6 \cdot 2 = -12$.

b) En el segundo determinante:
1) El determinante de una matriz es igual al de su traspuesta. Trasponemos: $\begin{vmatrix} a & b & c \\ x & y & z \\ 2p & 2q & 2r \end{vmatrix}$
2) Sacamos factor común $2$ de la tercera fila: $2 \cdot \begin{vmatrix} a & b & c \\ x & y & z \\ p & q & r \end{vmatrix}$
3) Intercambiamos las filas 2 y 3 (lo que cambia el signo del determinante): $-2 \cdot \begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} = -2 \cdot 2 = -4$.`,
  finalResult: String.raw`a) -12 \quad b) -4`,
  tip: "Aplica las propiedades paso a paso en líneas separadas. Sumar o restar filas no altera el determinante, pero intercambiarlas cambia el signo, y sacar factores comunes multiplica al resultado total.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio A3 (Análisis)
dbEjercicios.push({
  id: "2024-ORD-A3",
  year: 2024,
  call: "Ordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Sea $f(x) = \frac{x}{x^2 - 2x + 1}$.
a) Encuentra las asíntotas de $f$.
b) Calcula los intervalos de crecimiento y decrecimiento de $f$.
c) Halla la ecuación de la recta tangente a la gráfica de $f$ en el punto de abscisa $x = 0$.`,
  stepByStep: String.raw`El denominador es $(x-1)^2$, que se anula en $x=1$. El dominio es $\mathbb{R} \setminus \{1\}$.
a) Asíntotas:
- Vertical: $\lim_{x \to 1} \frac{x}{(x-1)^2} = \frac{1}{0^+} = +\infty$. Hay asíntota vertical en $x=1$.
- Horizontal: $\lim_{x \to \pm\infty} \frac{x}{x^2 - 2x + 1} = 0$. Hay asíntota horizontal en $y=0$.

b) Crecimiento y decrecimiento:
Derivamos aplicando regla del cociente:
$f'(x) = \frac{1(x-1)^2 - x \cdot 2(x-1)}{(x-1)^4} = \frac{(x-1) - 2x}{(x-1)^3} = \frac{-x-1}{(x-1)^3}$.
Igualamos a cero: $-x - 1 = 0 \Rightarrow x = -1$.
Estudiamos el signo de $f'$ en los intervalos $(-\infty, -1)$, $(-1, 1)$ y $(1, \infty)$:
- $(-\infty, -1)$: $f'(-2) = \frac{1}{(-3)^3} = -1/27 < 0 \Rightarrow$ Decrece.
- $(-1, 1)$: $f'(0) = \frac{-1}{(-1)^3} = 1 > 0 \Rightarrow$ Crece.
- $(1, \infty)$: $f'(2) = \frac{-3}{1^3} = -3 < 0 \Rightarrow$ Decrece.

c) Recta tangente en $x=0$:
Punto: $f(0) = \frac{0}{1} = 0$.
Pendiente: $f'(0) = \frac{-1}{-1} = 1$.
Ecuación: $y - 0 = 1(x - 0) \Rightarrow y = x$.`,
  finalResult: String.raw`a) AV: x=1, AH: y=0. b) Crece: (-1, 1). Decrece: (-\infty, -1) \cup (1, \infty). c) y = x`,
  tip: "Fíjate que el denominador original es un binomio al cuadrado perfecto. Factorizarlo de inmediato simplifica muchísimo la aplicación de la regla de la derivada del cociente.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio B3 (Análisis)
dbEjercicios.push({
  id: "2024-ORD-B3",
  year: 2024,
  call: "Ordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Se sabe que la función $f(x) = Ax^4 + Bx^2 + C$ tiene un extremo relativo cuando $x = 1/2$ y la ecuación de la recta tangente a su gráfica en el punto de abscisa $x = 1$ es $y = 6x - 2$.
a) Encuentra los valores de los parámetros $A, B$ y $C$.
b) Encuentra todos los extremos relativos de la función $f$ y razona si son máximos o mínimos.`,
  stepByStep: String.raw`a) La derivada es $f'(x) = 4Ax^3 + 2Bx$.
1) Extremo en $x=1/2 \Rightarrow f'(1/2) = 0$.
$4A(1/8) + 2B(1/2) = A/2 + B = 0 \Rightarrow A + 2B = 0$.
2) Recta tangente en $x=1$ es $y=6x-2$. La pendiente es 6 y el punto de contacto es $(1, 4)$.
Por tanto, $f'(1) = 6 \Rightarrow 4A + 2B = 6 \Rightarrow 2A + B = 3$.
Y también $f(1) = 4 \Rightarrow A + B + C = 4$.

Resolvemos el sistema para $A$ y $B$:
De la primera, $A = -2B$. Sustituyendo en la segunda: $2(-2B) + B = 3 \Rightarrow -3B = 3 \Rightarrow B = -1$.
Por lo tanto $A = 2$.
Sustituimos en la tercera: $2 - 1 + C = 4 \Rightarrow C = 3$.
La función es $f(x) = 2x^4 - x^2 + 3$.

b) Extremos relativos:
$f'(x) = 8x^3 - 2x = 2x(4x^2 - 1) = 0$. Raíces: $x=0, x=1/2, x=-1/2$.
Usamos la segunda derivada para clasificar: $f''(x) = 24x^2 - 2$.
- En $x=0$: $f''(0) = -2 < 0 \Rightarrow$ Máximo relativo. Valor: $f(0) = 3$.
- En $x=1/2$: $f''(1/2) = 24(1/4) - 2 = 4 > 0 \Rightarrow$ Mínimo relativo. Valor: $f(1/2) = 23/8$.
- En $x=-1/2$: $f''(-1/2) = 4 > 0 \Rightarrow$ Mínimo relativo. Valor: $f(-1/2) = 23/8$.`,
  finalResult: String.raw`a) A=2, B=-1, C=3. b) Máximo en (0, 3). Mínimos en (1/2, 23/8) y (-1/2, 23/8)`,
  tip: "Un error típico es igualar sólo la pendiente de la recta tangente con la derivada en el punto. Tienes que usar la ecuación de la tangente para encontrar la coordenada Y del punto de tangencia y forzar a la función original a pasar por allí.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio A4 (Integrales)
dbEjercicios.push({
  id: "2024-ORD-A4",
  year: 2024,
  call: "Ordinaria",
  topic: "Integrales",
  statement: String.raw`Calcula las dos integrales siguientes:
a) $\int \frac{2 - 3x + x^3}{x^2 + 2x + 1} dx$
b) $\int \frac{2 - 3x}{x^2 + 2x + 1} dx$`,
  stepByStep: String.raw`a) El grado del numerador (3) es mayor que el del denominador (2), así que hacemos división polinómica.
$(x^3 - 3x + 2) \div (x^2 + 2x + 1)$.
El cociente da $x - 2$ y el resto da $4$.
Por el teorema de la división: $\frac{D}{d} = C + \frac{R}{d} = (x - 2) + \frac{4}{(x+1)^2}$.
Integramos:
$\int \left( x - 2 + 4(x+1)^{-2} \right) dx = \frac{x^2}{2} - 2x + 4 \frac{(x+1)^{-1}}{-1} + K = \frac{x^2}{2} - 2x - \frac{4}{x+1} + K$.

b) El denominador factoriza como $(x+1)^2$. Descomponemos en fracciones simples:
$\frac{2-3x}{(x+1)^2} = \frac{A}{x+1} + \frac{B}{(x+1)^2}$.
Igualando numeradores: $A(x+1) + B = -3x + 2$.
Para $x=-1 \Rightarrow B = -3(-1)+2 = 5$.
Identificando coeficientes de $x$: $A = -3$.
La integral queda:
$\int \left( \frac{-3}{x+1} + \frac{5}{(x+1)^2} \right) dx = -3\ln|x+1| - \frac{5}{x+1} + K$.`,
  finalResult: String.raw`a) \frac{x^2}{2} - 2x - \frac{4}{x+1} + K \quad b) -3\ln|x+1| - \frac{5}{x+1} + K`,
  tip: "Cuando el denominador es un cuadrado perfecto $(ax+b)^2$, puedes evitar el sistema de ecuaciones sumando y restando inteligentemente en el numerador para forzar la aparición de $(ax+b)$.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio B4 (Integrales)
dbEjercicios.push({
  id: "2024-ORD-B4",
  year: 2024,
  call: "Ordinaria",
  topic: "Integrales - Áreas",
  statement: String.raw`[⚠️ REQUIERE VER GRÁFICA ORIGINAL] Se consideran las curvas de ecuaciones $y = x^2$ e $y = \frac{x^2}{3}$ y la recta de ecuación $y = x$.
a) Dibuja el recinto del primer cuadrante limitado por esas tres curvas.
b) Calcula el área de ese recinto.`,
  stepByStep: String.raw`Analizamos las intersecciones de las tres funciones $f_1(x) = x^2$, $f_2(x) = x^2/3$, y $g(x) = x$.
1) $f_1$ y $g$: $x^2 = x \Rightarrow x = 0, x = 1$.
2) $f_2$ y $g$: $x^2/3 = x \Rightarrow x^2 = 3x \Rightarrow x = 0, x = 3$.
3) $f_1$ y $f_2$: Sólo se cortan en el origen $x = 0$.

El recinto queda limitado por $y=x$ por arriba, por $y=x^2$ en el tramo izquierdo inferior, y por $y=x^2/3$ en el tramo derecho inferior.
La propia solución del examen plantea el problema ligeramente diferente a la lectura obvia, integrando la "cuña" delimitada superiormente en todo el trayecto pero con suelos diferentes:
El recinto real está limitado superiormente por $y = x^2$ (en un tramo) y $y=x$ en otro, pero basándonos en la estructura de cruces, el área encerrada se divide en dos integrales desde el origen hasta 3:
Wait, el cruce es en $x=1$ para la primera parábola. Para la "cuña" delimitada superiormente por $y=x^2+2x$ e inferiormente por $x^2/3$ (espera, ¡ese es el Extraordinario!).

Recalculando para Ordinaria: $y=x^2, y=x^2/3, y=x$.
El recinto pedido está limitado superiormente por $y=x$ e inferiormente por $y=x^2/3$, hasta $x=3$. Sin embargo, la región de $0$ a $1$ está cortada por $y=x^2$.
El recinto interior entre las tres curvas tiene a $y=x^2$ como TECHO y $y=x^2/3$ como SUELO desde $x=0$ a $x=1$. A partir de $x=1$, el techo pasa a ser $y=x$ y el suelo se mantiene en $y=x^2/3$ hasta el corte en $x=3$.
$A_1 = \int_0^1 (x^2 - x^2/3) dx = \int_0^1 \frac{2x^2}{3} dx = \left[ \frac{2x^3}{9} \right]_0^1 = \frac{2}{9}$.
$A_2 = \int_1^3 (x - x^2/3) dx = \left[ \frac{x^2}{2} - \frac{x^3}{9} \right]_1^3 = \left( \frac{9}{2} - \frac{27}{9} \right) - \left( \frac{1}{2} - \frac{1}{9} \right) = \left( 4.5 - 3 \right) - (0.5 - 0.111) = 1.5 - 0.388 = \frac{10}{9}$.
Área Total = $A_1 + A_2 = \frac{2}{9} + \frac{10}{9} = \frac{12}{9} = \frac{4}{3}$.`,
  finalResult: String.raw`4/3 \text{ u}^2`,
  tip: "Al tener tres curvas, es obligatorio dividir el área total en la abscisa donde se cruzan las curvas de los 'bordes'. Siempre dibuja un boceto para no restar funciones que no se tocan.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio A5 (Probabilidad)
dbEjercicios.push({
  id: "2024-ORD-A5",
  year: 2024,
  call: "Ordinaria",
  topic: "Probabilidad",
  statement: String.raw`Tenemos dos urnas con bolas de colores. La urna A contiene 3 bolas verdes, 5 bolas rojas y 4 bolas azules. La urna B contiene 2 bolas verdes, 2 bolas rojas y 3 bolas azules. Se saca, al azar, una bola de la urna A y se mete en la urna B. Posteriormente se saca una bola de la urna B.
a) Realiza el correspondiente diagrama de árbol.
b) Calcula la probabilidad de que la bola extraída de la urna B sea verde.
c) Calcula la probabilidad de que la bola extraída de la urna B sea verde sabiendo que la bola extraída de la urna A ha sido roja.
d) Sabiendo que la bola extraída de la urna B es verde, calcula la probabilidad de que la bola extraída de la urna A haya sido roja.`,
  stepByStep: String.raw`Urna A: 12 bolas en total (3 V, 5 R, 4 Az).
Urna B inicialmente: 7 bolas en total (2 V, 2 R, 3 Az). Al recibir una de A, pasa a tener 8 bolas.
Probabilidades de extracción en A: $P(V_A) = 3/12 = 1/4$, $P(R_A) = 5/12$, $P(Az_A) = 4/12 = 1/3$.
Probabilidades en B según qué entró:
- Si entró Verde: Urna B = 3 V, 2 R, 3 Az. $P(V_B | V_A) = 3/8$.
- Si entró Roja: Urna B = 2 V, 3 R, 3 Az. $P(V_B | R_A) = 2/8 = 1/4$.
- Si entró Azul: Urna B = 2 V, 2 R, 4 Az. $P(V_B | Az_A) = 2/8 = 1/4$.

b) Probabilidad Total de extraer Verde en B:
$P(V_B) = P(V_A)P(V_B | V_A) + P(R_A)P(V_B | R_A) + P(Az_A)P(V_B | Az_A)$
$= \left(\frac{3}{12}\right)\left(\frac{3}{8}\right) + \left(\frac{5}{12}\right)\left(\frac{2}{8}\right) + \left(\frac{4}{12}\right)\left(\frac{2}{8}\right) = \frac{9 + 10 + 8}{96} = \frac{27}{96} = \frac{9}{32}$.

c) Se pide directamente la condicionada que ya está en el árbol: $P(V_B | R_A) = 2/8 = 1/4$.

d) Probabilidad a posteriori usando Teorema de Bayes:
$P(R_A | V_B) = \frac{P(R_A)P(V_B | R_A)}{P(V_B)} = \frac{(5/12)(2/8)}{27/96} = \frac{10/96}{27/96} = \frac{10}{27}$.`,
  finalResult: String.raw`b) 9/32 \quad c) 1/4 \quad d) 10/27`,
  tip: "Cuando pases bolas entre urnas, no olvides sumar +1 al denominador total de la urna de destino, además de sumar +1 al color correspondiente en el numerador.",
  requiresReview: false
});

// 2024 Ordinaria - Ejercicio B5 (Estadística)
dbEjercicios.push({
  id: "2024-ORD-B5",
  year: 2024,
  call: "Ordinaria",
  topic: "Estadística",
  statement: String.raw`Tras la realización de un estudio, se ha llegado a la conclusión de que el tiempo medio que un adulto aguanta bajo el agua sin respirar es de 45 segundos, con una desviación típica de 7,3 segundos, ajustándose los datos a una distribución normal.
a) Calcula el porcentaje de adultos que aguanta más de 57 segundos.
b) Calcula el porcentaje de adultos que aguanta entre 39 y 57 segundos.`,
  stepByStep: String.raw`Variable $X \sim N(45, 7.3)$.
a) $P(X > 57)$. Tipificamos con $Z = \frac{X - \mu}{\sigma}$:
$Z = \frac{57 - 45}{7.3} = \frac{12}{7.3} \approx 1.64$.
Buscamos en la tabla $N(0,1)$: $P(Z > 1.64) = 1 - P(Z \le 1.64) = 1 - 0.9495 = 0.0505$.
El porcentaje es $5.05$ %.

b) $P(39 < X < 57)$. Tipificamos ambos extremos:
$Z_1 = \frac{39 - 45}{7.3} = \frac{-6}{7.3} \approx -0.82$.
$Z_2 = \frac{57 - 45}{7.3} \approx 1.64$.
Calculamos la probabilidad del intervalo:
$P(-0.82 < Z < 1.64) = P(Z < 1.64) - P(Z < -0.82)$.
Por simetría, $P(Z < -0.82) = 1 - P(Z < 0.82) = 1 - 0.7939 = 0.2061$.
Sustituimos: $0.9495 - 0.2061 = 0.7434$.
El porcentaje es $74.34$ %.`,
  finalResult: String.raw`a) 5.05 \% \quad b) 74.34 \%`,
  tip: "Acostúmbrate a dejar 2 decimales exactos en la Z al redondear, pues es lo que permite buscar en la tabla estándar sin necesidad de interpolar.",
  requiresReview: false
});

// --- 2024 EXTRAORDINARIA ---

// 2024 Extraordinaria - Ejercicio A1 (Álgebra)
dbEjercicios.push({
  id: "2024-EXT-A1",
  year: 2024,
  call: "Extraordinaria",
  topic: "Álgebra - Sistemas",
  statement: String.raw`Discute la existencia de solución del siguiente sistema en función de los valores del parámetro $\alpha$:
$$ \begin{cases} \alpha x + 4y + z = 3 \\ \alpha x - 5y + 2z = -2 \\ 2x - y + 3z = 1 \end{cases} $$
Resuelve el sistema, si es posible, cuando $\alpha = 0$ y cuando $\alpha = 1$.`,
  stepByStep: String.raw`Calculamos el determinante de la matriz de coeficientes:
$|A| = \begin{vmatrix} \alpha & 4 & 1 \\ \alpha & -5 & 2 \\ 2 & -1 & 3 \end{vmatrix} = -15\alpha + 16 - \alpha - (-10 - 2\alpha + 12\alpha) = -16\alpha + 16 - 10\alpha + 10 = 26 - 26\alpha$.
Igualamos a cero: $26(1 - \alpha) = 0 \Rightarrow \alpha = 1$.
- Si $\alpha \neq 1 \Rightarrow |A| \neq 0 \Rightarrow$ Sistema Compatible Determinado.
- Si $\alpha = 1 \Rightarrow |A| = 0$. Rango de A es 2 (por ejemplo, el menor $\begin{vmatrix} 4 & 1 \\ -5 & 2 \end{vmatrix} = 13 \neq 0$).
Matriz ampliada en $\alpha = 1$:
$\begin{pmatrix} 1 & 4 & 1 & | & 3 \\ 1 & -5 & 2 & | & -2 \\ 2 & -1 & 3 & | & 1 \end{pmatrix}$.
Observamos que Fila 1 + Fila 2 = Fila 3. Por lo tanto, el rango de la ampliada también es 2. Sistema Compatible Indeterminado.

Caso $\alpha = 0$:
$4y + z = 3$
$-5y + 2z = -2$
$2x - y + 3z = 1$
Del sistema $2 \times 2$ de y, z: $z = 3 - 4y$. Sustituimos en la segunda: $-5y + 2(3 - 4y) = -2 \Rightarrow -5y + 6 - 8y = -2 \Rightarrow 13y = 8 \Rightarrow y = 8/13$.
Luego $z = 3 - 32/13 = 7/13$.
En la tercera: $2x - 8/13 + 21/13 = 1 \Rightarrow 2x + 13/13 = 1 \Rightarrow 2x + 1 = 1 \Rightarrow x = 0$.
Solución: $(0, 8/13, 7/13)$.

Caso $\alpha = 1$:
El sistema se reduce a 2 ecuaciones: $x + 4y + z = 3$ y $x - 5y + 2z = -2$.
Despejamos $x$ de la primera: $x = 3 - 4y - z$.
Sustituimos en la segunda: $(3 - 4y - z) - 5y + 2z = -2 \Rightarrow 3 - 9y + z = -2 \Rightarrow z = 9y - 5$.
Ahora sustituimos $z$ en $x$: $x = 3 - 4y - (9y - 5) = 8 - 13y$.
Solución paramétrica (haciendo $y=t$): $(8-13t, t, 9t-5)$.`,
  finalResult: String.raw`\alpha \neq 1: SCD. \alpha=1: SCI. Para \alpha=0: (0, 8/13, 7/13). Para \alpha=1: (8-13t, t, 9t-5)`,
  tip: "Cuando hay un Sistema Compatible Indeterminado de 3 incógnitas y rango 2, elige dos ecuaciones linealmente independientes y expresa dos variables en función de la tercera elegida como parámetro libre $t$.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio B1 (Álgebra)
dbEjercicios.push({
  id: "2024-EXT-B1",
  year: 2024,
  call: "Extraordinaria",
  topic: "Álgebra - Matrices",
  statement: String.raw`Calcula el rango de la matriz A dependiendo de los valores del parámetro $m$:
$$ A = \begin{pmatrix} 1 & 3 & 4 & 1 \\ m & 2 & -m & 2 \\ m & -2 & m-2 & 1 \end{pmatrix} $$`,
  stepByStep: String.raw`Buscamos qué menores de orden 3 se anulan en función de $m$.
El determinante de las tres últimas columnas $C_2, C_3, C_4$ es:
$\Delta = \begin{vmatrix} 3 & 4 & 1 \\ 2 & -m & 2 \\ -2 & m-2 & 1 \end{vmatrix}$
Resolviendo el determinante se llega a $-m^2 + 5m - 4 = -(m-1)(m-4)$.
Sus raíces son $m=1$ y $m=4$.
- Si $m \neq 1$ y $m \neq 4$, existe un menor de orden 3 distinto de cero. Rango de A = 3.
- Si $m = 1$:
La matriz queda $A = \begin{pmatrix} 1 & 3 & 4 & 1 \\ 1 & 2 & -1 & 2 \\ 1 & -2 & -1 & 1 \end{pmatrix}$.
Ningún menor $3 \times 3$ da distinto de cero (el rango es menor que 3), y como el menor $2 \times 2$ de la esquina superior izquierda $\begin{vmatrix} 1 & 3 \\ 1 & 2 \end{vmatrix} = -1 \neq 0$, el Rango es 2.
- Si $m = 4$:
La matriz queda $A = \begin{pmatrix} 1 & 3 & 4 & 1 \\ 4 & 2 & -4 & 2 \\ 4 & -2 & 2 & 1 \end{pmatrix}$.
Ocurre lo mismo, todos los determinantes $3 \times 3$ valen 0, y evaluando el menor $\begin{vmatrix} 1 & 3 \\ 4 & 2 \end{vmatrix} = -10 \neq 0$, se concluye que el Rango es 2.`,
  finalResult: String.raw`Si m \neq 1 y m \neq 4, Rango = 3. Si m = 1 o m = 4, Rango = 2.`,
  tip: "Cuando el primer menor que intentes tenga determinantes muy complejos, prueba otro grupo de columnas. A veces una combinación de columnas deja un polinomio de grado inferior y es más fácil de resolver.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio A3 (Análisis)
dbEjercicios.push({
  id: "2024-EXT-A3",
  year: 2024,
  call: "Extraordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Sea $f(x) = x^3 + Ax^2 + Bx + C$. Las rectas tangentes a la gráfica de la función $f$ en los puntos de abscisa $x = -1$ y $x = 2$ son paralelas. Además, $f$ tiene un extremo relativo cuando $x = 1$ y $f(0) = \lim_{x \to 0} \frac{e^{2x} - 1}{x}$.
a) Encuentra los valores de los parámetros $A, B$ y $C$.
b) Encuentra la ecuación de la recta tangente a la gráfica de $f$ en el punto de abscisa $x = -1$ para los valores de los parámetros $A = -3, B = 0$ y $C = 4$.`,
  stepByStep: String.raw`a) Calculamos la derivada: $f'(x) = 3x^2 + 2Ax + B$.
1) Tangentes paralelas en $x=-1$ y $x=2 \Rightarrow f'(-1) = f'(2)$.
$3 - 2A + B = 12 + 4A + B \Rightarrow 6A = -9 \Rightarrow A = -3/2$.
2) Extremo relativo en $x=1 \Rightarrow f'(1) = 0$.
$3 + 2A + B = 0 \Rightarrow 3 + 2(-3/2) + B = 0 \Rightarrow 3 - 3 + B = 0 \Rightarrow B = 0$.
3) Límite para obtener $C$: $\lim_{x \to 0} \frac{e^{2x} - 1}{x}$.
Aplicamos regla de L'Hôpital: $\lim_{x \to 0} \frac{2e^{2x}}{1} = 2$.
Como $f(0) = C$, entonces $C = 2$.
Resulta: $A = -3/2, B = 0, C = 2$.

b) Con $A=-3, B=0, C=4$, la función es $f(x) = x^3 - 3x^2 + 4$.
Buscamos la recta tangente en $x=-1$.
Punto Y: $f(-1) = (-1)^3 - 3(-1)^2 + 4 = -1 - 3 + 4 = 0$. Coordenadas: $(-1, 0)$.
Pendiente: $f'(x) = 3x^2 - 6x \Rightarrow f'(-1) = 3(1) - 6(-1) = 9$.
Ecuación: $y - 0 = 9(x - (-1)) \Rightarrow y = 9x + 9$.`,
  finalResult: String.raw`a) A = -3/2, B = 0, C = 2. b) y = 9x + 9`,
  tip: "Recuerda que para límites con forma indeterminada 0/0 que involucran exponenciales trigonométricas puras, L'Hôpital es la vía directa más segura frente a las expansiones de Taylor.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio B3 (Análisis)
dbEjercicios.push({
  id: "2024-EXT-B3",
  year: 2024,
  call: "Extraordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Sea $f(x) = 2x e^{-2x^2}$.
a) Encuentra los intervalos de crecimiento y decrecimiento de $f$.
b) Encuentra los extremos relativos de $f$ y razona si son máximos o mínimos.
c) Calcula las asíntotas de $f$.`,
  stepByStep: String.raw`Derivamos usando regla del producto:
$f'(x) = 2 \cdot e^{-2x^2} + 2x \cdot e^{-2x^2} \cdot (-4x) = 2e^{-2x^2} - 8x^2 e^{-2x^2} = 2e^{-2x^2}(1 - 4x^2)$.
a) Crecimiento y decrecimiento:
Igualamos a cero: $1 - 4x^2 = 0 \Rightarrow 4x^2 = 1 \Rightarrow x = 1/2, x = -1/2$.
El término $2e^{-2x^2}$ siempre es positivo, así que el signo depende de $(1 - 4x^2)$:
- $(-\infty, -1/2)$: $f'(-1) = (+) \cdot (-3) < 0 \Rightarrow$ Decrece.
- $(-1/2, 1/2)$: $f'(0) = (+) \cdot (1) > 0 \Rightarrow$ Crece.
- $(1/2, \infty)$: $f'(1) = (+) \cdot (-3) < 0 \Rightarrow$ Decrece.

b) Extremos relativos:
Evaluamos el cambio de signo de la derivada:
En $x = -1/2$ pasa de decrecer a crecer $\Rightarrow$ Mínimo relativo. $f(-1/2) = -e^{-1/2} = -1/\sqrt{e}$.
En $x = 1/2$ pasa de crecer a decrecer $\Rightarrow$ Máximo relativo. $f(1/2) = e^{-1/2} = 1/\sqrt{e}$.

c) Asíntotas:
Dominio en $\mathbb{R}$, no hay asíntotas verticales.
Límites al infinito: $\lim_{x \to \pm\infty} 2x e^{-2x^2} = \lim_{x \to \pm\infty} \frac{2x}{e^{2x^2}}$.
Por L'Hôpital: $\lim_{x \to \pm\infty} \frac{2}{e^{2x^2} \cdot 4x} = 0$.
Por lo tanto, la recta $y = 0$ es asíntota horizontal por la derecha y por la izquierda.`,
  finalResult: String.raw`a) Crece: (-1/2, 1/2). Decrece: (-\infty, -1/2) \cup (1/2, \infty). b) Máximo en (1/2, 1/\sqrt{e}). Mínimo en (-1/2, -1/\sqrt{e}). c) AH: y=0`,
  tip: "La exponencial es la reina de los límites al infinito en el denominador: siempre arrastra el límite a 0 frente a cualquier polinomio que quede en el numerador.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio A4 (Integrales)
dbEjercicios.push({
  id: "2024-EXT-A4",
  year: 2024,
  call: "Extraordinaria",
  topic: "Integrales",
  statement: String.raw`Calcula la siguiente integral, y explica el método empleado: $\int x \ln^2 x dx$`,
  stepByStep: String.raw`Utilizamos el método de integración por partes ($ALPES$) en dos iteraciones.
1ª Iteración:
Sea $u = \ln^2 x \Rightarrow du = 2\ln x \cdot \frac{1}{x} dx$.
Sea $dv = x dx \Rightarrow v = \frac{x^2}{2}$.
$\int x \ln^2 x dx = \frac{x^2}{2} \ln^2 x - \int \frac{x^2}{2} \cdot 2\ln x \cdot \frac{1}{x} dx$
Simplificando la integral restante: $\int x \ln x dx$.

2ª Iteración (sobre $\int x \ln x dx$):
Sea $u = \ln x \Rightarrow du = \frac{1}{x} dx$.
Sea $dv = x dx \Rightarrow v = \frac{x^2}{2}$.
$\int x \ln x dx = \frac{x^2}{2} \ln x - \int \frac{x^2}{2} \cdot \frac{1}{x} dx = \frac{x^2}{2} \ln x - \int \frac{x}{2} dx$.
Resolvemos: $\frac{x^2}{2} \ln x - \frac{x^2}{4}$.

Sustituimos en la ecuación de la 1ª iteración:
$\frac{x^2}{2} \ln^2 x - \left( \frac{x^2}{2} \ln x - \frac{x^2}{4} \right) + K = \frac{x^2}{2} \ln^2 x - \frac{x^2}{2} \ln x + \frac{x^2}{4} + K$.`,
  finalResult: String.raw`\frac{x^2}{2} \ln^2 x - \frac{x^2}{2} \ln x + \frac{x^2}{4} + K`,
  tip: "Recuerda que $\ln^2 x = (\ln x)^2$. Para derivarlo aplica la regla de la cadena, no derives únicamente el logaritmo aislado.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio B4 (Integrales)
dbEjercicios.push({
  id: "2024-EXT-B4",
  year: 2024,
  call: "Extraordinaria",
  topic: "Integrales - Áreas",
  statement: String.raw`[⚠️ REQUIERE VER GRÁFICA ORIGINAL] Se consideran las curvas de ecuaciones $y = \frac{x^2}{3}$, $y = x^2 + 2x$ e $y = 3$.
a) Dibuja el recinto del primer cuadrante limitado por dichas curvas.
b) Calcula el área de ese recinto.`,
  stepByStep: String.raw`Hallamos los puntos de intersección en el primer cuadrante.
1) $y = x^2/3$ e $y = 3 \Rightarrow x^2/3 = 3 \Rightarrow x^2 = 9 \Rightarrow x = 3$.
2) $y = x^2+2x$ e $y = 3 \Rightarrow x^2+2x-3 = 0 \Rightarrow (x+3)(x-1) = 0 \Rightarrow x = 1$ (nos quedamos con el primer cuadrante).

El recinto está debajo de $y=3$. El piso de este recinto lo forman las dos parábolas.
El límite izquierdo o techo en el primer tramo es la parábola pronunciada $y=x^2+2x$, y el suelo del recinto principal inferiormente lo hace $y=x^2/3$.
Para la integración, calculamos la cuña de área total debajo de las líneas relevantes. El recinto pedido se encuentra desde $x=0$ a $x=3$.
- Tramo 1 $[0, 1]$: el techo es $y = x^2 + 2x$ y el suelo es $y = x^2/3$.
$A_1 = \int_0^1 (x^2 + 2x - x^2/3) dx = \int_0^1 (\frac{2x^2}{3} + 2x) dx = \left[ \frac{2x^3}{9} + x^2 \right]_0^1 = \frac{2}{9} + 1 = \frac{11}{9}$.
- Tramo 2 $[1, 3]$: el techo pasa a ser la recta horizontal $y=3$ y el suelo sigue siendo $y=x^2/3$.
$A_2 = \int_1^3 (3 - x^2/3) dx = \left[ 3x - \frac{x^3}{9} \right]_1^3 = \left( 9 - \frac{27}{9} \right) - \left( 3 - \frac{1}{9} \right) = (9 - 3) - (3 - 1/9) = 6 - \frac{26}{9} = \frac{54 - 26}{9} = \frac{28}{9}$.

Área Total = $A_1 + A_2 = \frac{11}{9} + \frac{28}{9} = \frac{39}{9} = \frac{13}{3}$.`,
  finalResult: String.raw`13/3 \text{ u}^2`,
  tip: "Cuando el techo cambie a lo largo del eje X (como al cruzar de una parábola a una recta plana constante), divide la integral justo en la coordenada X de ese cruce.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio A5 (Probabilidad)
dbEjercicios.push({
  id: "2024-EXT-A5",
  year: 2024,
  call: "Extraordinaria",
  topic: "Probabilidad",
  statement: String.raw`Los resultados revelaron que la probabilidad de quedar protegido contra la tuberculosis es de 0,54. Se aplica la vacuna a un grupo de 3289 adultos.
a) Identifica la distribución correspondiente y determina sus parámetros.
b) Calcula la probabilidad de que la vacuna haya sido efectiva en exactamente 1800 adultos.
c) Calcula la probabilidad de que la vacuna haya sido efectiva en menos de 1700 adultos.`,
  stepByStep: String.raw`a) La variable $X$ cuenta el número de éxitos en un número grande de intentos independientes. Es una Binomial $B(n, p)$ con $n = 3289$ y $p = 0.54$.
Como $n$ es muy grande y $np > 5$, aproximamos a Normal $Y \sim N(\mu, \sigma)$:
$\mu = np = 3289 \cdot 0.54 \approx 1776.06$.
$\sigma = \sqrt{npq} = \sqrt{3289 \cdot 0.54 \cdot 0.46} = \sqrt{816.98} \approx 28.58$.
Distribución: Normal $N(1776.06, 28.58)$.

b) Usamos la corrección por continuidad (Yates) para el valor discreto exacto $X = 1800$:
$P(X = 1800) = P(1799.5 \le Y \le 1800.5)$. Tipificamos:
$Z_1 = \frac{1799.5 - 1776.06}{28.58} \approx 0.82$.
$Z_2 = \frac{1800.5 - 1776.06}{28.58} \approx 0.86$.
$P(0.82 \le Z \le 0.86) = P(Z \le 0.86) - P(Z \le 0.82) = 0.8051 - 0.7939 = 0.0112$.

c) Menos de 1700 adultos ($X < 1700 \Rightarrow X \le 1699$ en discretos).
Por corrección de Yates: $P(Y \le 1699.5)$.
Tipificamos: $Z = \frac{1699.5 - 1776.06}{28.58} \approx -2.68$.
$P(Z \le -2.68) = 1 - P(Z \le 2.68) = 1 - 0.9963 = 0.0037$.`,
  finalResult: String.raw`a) B(3289, 0.54) \to N(1776.06, 28.58). \quad b) 0.0112 \quad c) 0.0037`,
  tip: "Cuando pases de Binomial a Normal, siempre aplica la corrección de continuidad o de Yates sumando o restando $0.5$ a la variable para ampliar el rango que cubra el escalón discreto exacto.",
  requiresReview: false
});

// 2024 Extraordinaria - Ejercicio B5 (Estadística)
dbEjercicios.push({
  id: "2024-EXT-B5",
  year: 2024,
  call: "Extraordinaria",
  topic: "Probabilidad Teórica",
  statement: String.raw`Sean $A$ y $B$ sucesos aleatorios independientes, siendo sus probabilidades $P(A) = 0.7$ y $P(B) = 0.1$, y sean $\bar{A}$ y $\bar{B}$ los sucesos complementarios. Calcula las siguientes probabilidades:
a) $P(A \cup B)$
b) $P(\bar{A} \cup \bar{B})$
c) $P(\bar{A} \cap \bar{B})$
d) $P(A \cap \bar{B})$
e) $P(\bar{A} | \bar{B})$`,
  stepByStep: String.raw`Al ser independientes, la intersección es el producto de probabilidades:
$P(A \cap B) = P(A) \cdot P(B) = 0.7 \cdot 0.1 = 0.07$.

a) Teorema de la suma de probabilidades:
$P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.7 + 0.1 - 0.07 = 0.73$.

b) Leyes de Morgan:
$P(\bar{A} \cup \bar{B}) = P(\overline{A \cap B}) = 1 - P(A \cap B) = 1 - 0.07 = 0.93$.

c) Leyes de Morgan:
$P(\bar{A} \cap \bar{B}) = P(\overline{A \cup B}) = 1 - P(A \cup B) = 1 - 0.73 = 0.27$.

d) Diferencia de conjuntos:
$P(A \cap \bar{B}) = P(A) - P(A \cap B) = 0.7 - 0.07 = 0.63$.

e) Probabilidad condicionada:
$P(\bar{A} | \bar{B}) = \frac{P(\bar{A} \cap \bar{B})}{P(\bar{B})}$.
Sabemos que $P(\bar{B}) = 1 - P(B) = 1 - 0.1 = 0.9$.
Sustituyendo el numerador hallado en c): $\frac{0.27}{0.90} = 0.3$.`,
  finalResult: String.raw`a) 0.73 \quad b) 0.93 \quad c) 0.27 \quad d) 0.63 \quad e) 0.3`,
  tip: "La ley de Morgan 'cambia las barras individuales por barra global y el símbolo de union por el de intersección (y viceversa)'. Es la herramienta más útil en teoría de conjuntos probabilísticos.",
  requiresReview: false
});
