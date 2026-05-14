// ----------------------------------------------------
// ETL PIPELINE: EXÁMENES 2022 (ORDINARIA Y EXTRAORDINARIA)
// ----------------------------------------------------

// 2022 Ordinaria - Ejercicio A1 (Álgebra)
dbEjercicios.push({
  id: "2022-ORD-A1",
  year: 2022,
  call: "Ordinaria",
  topic: "Álgebra - Sistemas",
  statement: String.raw`Discute la existencia de soluciones del sistema de ecuaciones lineales que sigue en función de los valores del parámetro $\alpha$:
$$ \begin{cases} x + y + \alpha z = \alpha \\ 2x + \alpha y + \alpha z = 1 \\ x + \alpha y + z = 1 \end{cases} $$
Resuelve el sistema para $\alpha = -1$ y $\alpha = 1$, si es posible.`,
  stepByStep: String.raw`Calculamos el determinante de la matriz de coeficientes:
$|A| = \begin{vmatrix} 1 & 1 & \alpha \\ 2 & \alpha & \alpha \\ 1 & \alpha & 1 \end{vmatrix} = \alpha + \alpha + 2\alpha^2 - (\alpha^2 + \alpha^2 + 2) = 2\alpha - 2$.
- Si $\alpha \neq 1 \Rightarrow |A| \neq 0 \Rightarrow$ SCD (Sistema Compatible Determinado).
- Si $\alpha = 1 \Rightarrow |A| = 0$. Rango de A es 2. Analizamos la matriz ampliada:
Las filas 1 y 3 son idénticas: $x + y + z = 1$. Rango de A* es 2 $\Rightarrow$ SCI (Sistema Compatible Indeterminado).

Resolución para $\alpha = 1$:
Tomamos $x + y + z = 1$ y $2x + y + z = 1$.
Restando ambas ecuaciones obtenemos $x = 0$.
Sustituyendo, $y + z = 1 \Rightarrow y = 1 - z$. Parametrizando: $(0, 1-t, t)$.

Resolución para $\alpha = -1$:
$|A| = 2(-1) - 2 = -4$.
Resolviendo por Cramer o sustitución, obtenemos $x = 0$, $y = -1$, $z = 0$.`,
  finalResult: String.raw`\alpha \neq 1: SCD. \alpha=1: SCI con solución (0, 1-t, t). Para \alpha=-1: x=0, y=-1, z=0`,
  tip: "Un sistema es SCD si y solo si su determinante principal es distinto de cero. Acostúmbrate a calcular ese determinante antes de empezar a operar a ciegas.",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio B1 (Álgebra)
dbEjercicios.push({
  id: "2022-ORD-B1",
  year: 2022,
  call: "Ordinaria",
  topic: "Álgebra - Matrices",
  statement: String.raw`Sea la matriz
$$ A = \begin{pmatrix} m & m & 2 \\ 1 & m - 2 & 0 \\ 0 & 2 & 2 \end{pmatrix} $$
(a) Determina para qué valores del parámetro $m$ la matriz $A$ no tiene inversa.
(b) Calcula, si es posible, la matriz inversa de $A$ para $m = 0$.`,
  stepByStep: String.raw`a) No tiene inversa si $|A| = 0$.
$|A| = 2m(m-2) + 0 + 4 - (0 + 0 + 2m) = 2m^2 - 4m + 4 - 2m = 2m^2 - 6m + 4$.
Igualamos a cero: $2m^2 - 6m + 4 = 0 \Rightarrow m^2 - 3m + 2 = 0 \Rightarrow (m-1)(m-2) = 0$.
No tiene inversa si $m=1$ o $m=2$.

b) Para $m=0$, la matriz es $A = \begin{pmatrix} 0 & 0 & 2 \\ 1 & -2 & 0 \\ 0 & 2 & 2 \end{pmatrix}$.
Su determinante es $|A| = 4$.
Matriz adjunta $Adj(A)$:
$A_{11} = -4, A_{12} = -2, A_{13} = 2$.
$A_{21} = 4, A_{22} = 0, A_{23} = 0$.
$A_{31} = 4, A_{32} = 2, A_{33} = 0$.
Matriz inversa $A^{-1} = \frac{1}{|A|} Adj(A)^T = \frac{1}{4} \begin{pmatrix} -4 & 4 & 4 \\ -2 & 0 & 2 \\ 2 & 0 & 0 \end{pmatrix} = \begin{pmatrix} -1 & 1 & 1 \\ -1/2 & 0 & 1/2 \\ 1/2 & 0 & 0 \end{pmatrix}$.`,
  finalResult: String.raw`a) m=1, m=2 \quad b) A^{-1} = \begin{pmatrix} -1 & 1 & 1 \\ -1/2 & 0 & 1/2 \\ 1/2 & 0 & 0 \end{pmatrix}`,
  tip: "La regla mnemotécnica de los signos de la matriz adjunta es un patrón de tablero de ajedrez empezando con $+$ arriba a la izquierda.",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio A3 (Análisis)
dbEjercicios.push({
  id: "2022-ORD-A3",
  year: 2022,
  call: "Ordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Dada la función $f(x) = (x - 1)^2 e^{-2x}$, estudia sus intervalos de crecimiento y decrecimiento y calcula sus máximos y mínimos.`,
  stepByStep: String.raw`Derivamos aplicando regla del producto y de la cadena:
$f'(x) = 2(x-1)e^{-2x} + (x-1)^2(-2)e^{-2x} = e^{-2x} [2x - 2 - 2(x^2 - 2x + 1)] = e^{-2x} [-2x^2 + 6x - 4]$.
Sacando factor común: $f'(x) = -2e^{-2x}(x^2 - 3x + 2)$.
Igualamos a cero: $x^2 - 3x + 2 = 0 \Rightarrow x=1, x=2$.
Como la exponencial $e^{-2x}$ siempre es positiva, el signo de $f'$ depende de la parábola $-2(x-1)(x-2)$.
- $(-\infty, 1)$: $f'(0) = -2(1)(2) < 0 \Rightarrow$ Decrece.
- $(1, 2)$: $f'(1.5) = -2(0.5)(-0.5) > 0 \Rightarrow$ Crece.
- $(2, \infty)$: $f'(3) = -2(2)(1) < 0 \Rightarrow$ Decrece.
Hay un mínimo relativo en $x=1$ con coordenada $y = (0)^2 e^{-2} = 0$.
Hay un máximo relativo en $x=2$ con coordenada $y = (1)^2 e^{-4} = 1/e^4$.`,
  finalResult: String.raw`Decrece: (-\infty, 1) \cup (2, \infty). Crece: (1, 2). Mínimo: (1, 0). Máximo: (2, 1/e^4)`,
  tip: "El factor $e^{f(x)}$ nunca puede anularse, así que siempre puedes ignorarlo a la hora de buscar raíces, ¡pero no de estudiar los signos si va acompañado de coeficientes negativos!",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio B3 (Análisis)
dbEjercicios.push({
  id: "2022-ORD-B3",
  year: 2022,
  call: "Ordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Sea $f(x) = x^3 + Ax^2 + Bx + C$. Encuentra los valores de los parámetros $A, B$ y $C$ para que $f$ se anule en el punto de abscisa $x = 1$ y las rectas tangentes a la gráfica de $f$ en los puntos de abscisa $x = -1$ y $x = 3$ sean paralelas a la recta $y = 2x + 1$.`,
  stepByStep: String.raw`Condiciones impuestas:
1) Se anula en $x=1 \Rightarrow f(1) = 0 \Rightarrow 1 + A + B + C = 0$.
2) Tangentes en $x=-1$ y $x=3$ paralelas a $y = 2x+1 \Rightarrow f'(-1) = 2$ y $f'(3) = 2$.

Derivamos: $f'(x) = 3x^2 + 2Ax + B$.
- $f'(-1) = 3 - 2A + B = 2 \Rightarrow -2A + B = -1$.
- $f'(3) = 27 + 6A + B = 2 \Rightarrow 6A + B = -25$.
Resolvemos este sistema lineal de 2 incógnitas restando ambas ecuaciones:
$(6A + B) - (-2A + B) = -25 - (-1) \Rightarrow 8A = -24 \Rightarrow A = -3$.
Sustituimos $A$: $-2(-3) + B = -1 \Rightarrow 6 + B = -1 \Rightarrow B = -7$.
Usamos la primera condición para hallar $C$:
$1 - 3 - 7 + C = 0 \Rightarrow -9 + C = 0 \Rightarrow C = 9$.`,
  finalResult: String.raw`A = -3, B = -7, C = 9`,
  tip: "Cuando dicen 'tangentes paralelas a la recta y = mx + n', significa literalmente que la derivada en esos puntos vale m.",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio A4 (Integrales)
dbEjercicios.push({
  id: "2022-ORD-A4",
  year: 2022,
  call: "Ordinaria",
  topic: "Integrales",
  statement: String.raw`Calcula $\int \frac{7x + 13}{(x + 1)(x^2 - x - 2)} dx$.`,
  stepByStep: String.raw`1) Factorizamos el polinomio de segundo grado del denominador:
$x^2 - x - 2 = 0 \Rightarrow x = \frac{1 \pm \sqrt{1 + 8}}{2} \Rightarrow x = 2, x = -1$.
El denominador completo es $(x+1)(x-2)(x+1) = (x+1)^2(x-2)$.
2) Descomponemos en fracciones simples:
$\frac{7x + 13}{(x+1)^2(x-2)} = \frac{A}{x-2} + \frac{B}{x+1} + \frac{C}{(x+1)^2}$.
Multiplicando todo por $(x+1)^2(x-2)$:
$7x + 13 = A(x+1)^2 + B(x-2)(x+1) + C(x-2)$.
Si $x = 2 \Rightarrow 27 = 9A \Rightarrow A = 3$.
Si $x = -1 \Rightarrow 6 = -3C \Rightarrow C = -2$.
Si $x = 0 \Rightarrow 13 = A - 2B - 2C \Rightarrow 13 = 3 - 2B + 4 \Rightarrow 6 = -2B \Rightarrow B = -3$.
3) Integramos cada fracción:
$\int \left( \frac{3}{x-2} - \frac{3}{x+1} - \frac{2}{(x+1)^2} \right) dx = 3\ln|x-2| - 3\ln|x+1| + \frac{2}{x+1} + K$.`,
  finalResult: String.raw`3\ln|x-2| - 3\ln|x+1| + \frac{2}{x+1} + K`,
  tip: "En fracciones parciales con raíces múltiples como $(x-a)^n$, debes incluir en el desarrollo desde $(x-a)^1$ hasta $(x-a)^n$.",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio B4 (Integrales)
dbEjercicios.push({
  id: "2022-ORD-B4",
  year: 2022,
  call: "Ordinaria",
  topic: "Integrales - Áreas",
  statement: String.raw`[⚠️ REQUIERE VER GRÁFICA ORIGINAL] Dibuja el recinto limitado por las gráficas de las funciones $f(x) = e^x$, $g(x) = e^{-x}$ y la recta horizontal $y = e$, y calcula el área de ese recinto.`,
  stepByStep: String.raw`Hallamos los puntos de intersección entre las funciones:
1) $f(x)$ y $y = e$: $e^x = e \Rightarrow x = 1$.
2) $g(x)$ y $y = e$: $e^{-x} = e \Rightarrow -x = 1 \Rightarrow x = -1$.
3) $f(x)$ y $g(x)$: $e^x = e^{-x} \Rightarrow e^{2x} = 1 \Rightarrow 2x = 0 \Rightarrow x = 0$.
El recinto queda limitado por $x \in [-1, 1]$. La recta $y=e$ es siempre el "techo".
En $[-1, 0]$, la función "suelo" es $g(x) = e^{-x}$.
En $[0, 1]$, la función "suelo" es $f(x) = e^x$.
Gracias a la simetría par del recinto, podemos calcular la mitad del área y multiplicarla por 2:
Área $= 2 \int_0^1 (e - e^x) dx = 2 \left[ ex - e^x \right]_0^1 = 2 \left( (e(1) - e^1) - (e(0) - e^0) \right) = 2(0 - (-1)) = 2$.`,
  finalResult: String.raw`2 \text{ u}^2`,
  tip: "Cuando veas simetría par exacta ($f(-x)=f(x)$) en todas las funciones involucradas, calcular solo la mitad positiva del área multiplicada por 2 te ahorrará bastantes errores de signos.",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio A5 (Probabilidad)
dbEjercicios.push({
  id: "2022-ORD-A5",
  year: 2022,
  call: "Ordinaria",
  topic: "Probabilidad",
  statement: String.raw`Tenemos dos urnas con el siguiente número de bolas blancas y negras:
T: 4 bolas negras y 6 blancas.
R: 7 bolas negras y 3 blancas.
Se selecciona al azar una urna, se extrae una bola y se coloca en la otra urna. A continuación, se extrae una bola de esta última urna. Calcula la probabilidad de que las dos bolas extraídas:
(a) sean negras,
(b) sean blancas,
(c) sean de distinto color.`,
  stepByStep: String.raw`a) Dos opciones mutuamente excluyentes:
Opción 1: Se elige T ($P=1/2$). Se extrae Negra de T ($P=4/10$). Ahora R tiene 8 Negras y 3 Blancas (Total 11). Se extrae Negra de R ($P=8/11$). Rama = $1/2 \times 4/10 \times 8/11 = 16/110$.
Opción 2: Se elige R ($P=1/2$). Se extrae Negra de R ($P=7/10$). Ahora T tiene 5 Negras y 6 Blancas (Total 11). Se extrae Negra de T ($P=5/11$). Rama = $1/2 \times 7/10 \times 5/11 = 35/220$.
Suma: $32/220 + 35/220 = 67/220 \approx 0.3045$.

b) Idéntico análisis para blancas:
Si elige T, extrae Blanca ($6/10$), R pasa a 7N y 4B. Extrae Blanca de R ($4/11$). Rama = $1/2 \times 6/10 \times 4/11 = 12/110 = 24/220$.
Si elige R, extrae Blanca ($3/10$), T pasa a 4N y 7B. Extrae Blanca de T ($7/11$). Rama = $1/2 \times 3/10 \times 7/11 = 21/220$.
Suma: $24/220 + 21/220 = 45/220 \approx 0.2045$.

c) Ser de distinto color es el suceso complementario a que sean del mismo color (o las dos blancas o las dos negras).
$P(\text{distinto color}) = 1 - P(2\text{N}) - P(2\text{B}) = 1 - \frac{67}{220} - \frac{45}{220} = 1 - \frac{112}{220} = \frac{108}{220} = \frac{27}{55} \approx 0.4909$.`,
  finalResult: String.raw`a) 67/220 \quad b) 45/220 \quad c) 27/55`,
  tip: "Construir tu espacio muestral final calculando primero mentalmente el recuento de bolas actualizadas en la 'otra' urna es crítico antes de poner las fracciones.",
  requiresReview: false
});

// 2022 Ordinaria - Ejercicio B5 (Estadística)
dbEjercicios.push({
  id: "2022-ORD-B5",
  year: 2022,
  call: "Ordinaria",
  topic: "Estadística",
  statement: String.raw`El peso (en gramos) de una pieza fabricada en serie sigue una distribución normal de media $52$ y desviación típica $6.5$.
(a) Calcula la probabilidad de que el peso de una pieza fabricada esté comprendida entre 50 y 68 gramos.
(b) Si el 30 % de las piezas fabricadas pesa más que una pieza dada, ¿cuánto pesa esta última?`,
  stepByStep: String.raw`Sea $X \sim N(52, 6.5)$.
a) $P(50 < X < 68) = P\left(\frac{50 - 52}{6.5} < Z < \frac{68 - 52}{6.5}\right) = P\left(\frac{-2}{6.5} < Z < \frac{16}{6.5}\right) \approx P(-0.31 < Z < 2.46)$.
$= P(Z < 2.46) - P(Z < -0.31) = P(Z < 2.46) - (1 - P(Z < 0.31)) = 0.9931 - (1 - 0.6217) = 0.9931 - 0.3783 = 0.6148$.

b) Nos piden el percentil 70 (porque el 30% pesa MÁS, luego el 70% pesa MENOS).
$P(X > k) = 0.30 \Rightarrow P(X \le k) = 0.70$.
Buscamos en la tabla Normal Inversa el área 0.7000. El valor $z$ más cercano es $0.52$ (el cual corresponde a 0.6985).
Deshacemos la tipificación:
$\frac{k - 52}{6.5} = 0.52 \Rightarrow k = 52 + 0.52(6.5) = 52 + 3.38 = 55.38$ g.`,
  finalResult: String.raw`a) 0.6148 \quad b) 55.38 \text{ gramos}`,
  tip: "Cuando trabajes con los porcentajes 'por encima de', haz rápidamente el complemento a 1 para poder buscar en las tablas estándar de $P(Z < z)$.",
  requiresReview: false
});

// --- 2022 EXTRAORDINARIA ---

// 2022 Extraordinaria - Ejercicio A1 (Álgebra)
dbEjercicios.push({
  id: "2022-EXT-A1",
  year: 2022,
  call: "Extraordinaria",
  topic: "Álgebra - Sistemas",
  statement: String.raw`Discute la existencia de soluciones del sistema de ecuaciones lineales que sigue en función de los valores del parámetro $\alpha$:
$$ \begin{cases} \alpha x + 2y - 2z = 2 \\ 2x + 2y - 2z = \alpha \\ \alpha x + 2y - z = 1 \end{cases} $$
Resuelve el sistema para $\alpha = 1$, si es posible.`,
  stepByStep: String.raw`Calculamos el determinante de la matriz de coeficientes:
$|A| = \begin{vmatrix} \alpha & 2 & -2 \\ 2 & 2 & -2 \\ \alpha & 2 & -1 \end{vmatrix} = (-2\alpha - 4\alpha - 8) - (-4\alpha - 4\alpha - 4) = -6\alpha - 8 + 8\alpha + 4 = 2\alpha - 4$.
- Si $\alpha \neq 2 \Rightarrow |A| \neq 0 \Rightarrow$ SCD.
- Si $\alpha = 2 \Rightarrow |A| = 0$. Rango de A es 2. Analizamos la matriz ampliada tomando la última columna; su determinante también resulta ser cero. Por tanto, Rango(A*) es 2 $\Rightarrow$ SCI.

Resolución para $\alpha = 1$:
$\begin{cases} x + 2y - 2z = 2 \\ 2x + 2y - 2z = 1 \\ x + 2y - z = 1 \end{cases}$
Si restamos la ec1 a la ec2 obtenemos $x = -1$.
Si restamos la ec1 a la ec3 obtenemos $z = -1$.
Sustituyendo $x$ y $z$ en la primera ecuación:
$-1 + 2y - 2(-1) = 2 \Rightarrow -1 + 2y + 2 = 2 \Rightarrow 2y = 1 \Rightarrow y = 1/2$.
Solución única.`,
  finalResult: String.raw`\alpha \neq 2: SCD. \alpha=2: SCI. Para \alpha=1: x=-1, y=1/2, z=-1`,
  tip: "La resta de ecuaciones enteras ('Reducción' de Gauss) sigue siendo el método más fiable y veloz cuando los coeficientes de $y$ y $z$ son casi idénticos en todas las filas.",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio B1 (Álgebra)
dbEjercicios.push({
  id: "2022-EXT-B1",
  year: 2022,
  call: "Extraordinaria",
  topic: "Álgebra - Matrices",
  statement: String.raw`Calcula de manera razonada, aplicando las propiedades adecuadas, el valor del determinante
$$ \begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} $$
sabiendo que $\begin{vmatrix} p+a & q+b & r+c \\ 2x & 2y & 2z \\ p+x & q+y & r+z \end{vmatrix} = 6$.`,
  stepByStep: String.raw`Usaremos propiedades de determinantes para simplificar la matriz conocida.
1) Extraemos el factor 2 de la segunda fila:
$2 \begin{vmatrix} p+a & q+b & r+c \\ x & y & z \\ p+x & q+y & r+z \end{vmatrix} = 6 \Rightarrow \begin{vmatrix} p+a & q+b & r+c \\ x & y & z \\ p+x & q+y & r+z \end{vmatrix} = 3$.
2) Restamos la segunda fila a la tercera fila ($F3 \to F3 - F2$):
$\begin{vmatrix} p+a & q+b & r+c \\ x & y & z \\ p & q & r \end{vmatrix} = 3$.
3) Restamos la tercera fila a la primera fila ($F1 \to F1 - F3$):
$\begin{vmatrix} a & b & c \\ x & y & z \\ p & q & r \end{vmatrix} = 3$.
4) El determinante que nos piden tiene las filas $x,y,z$ y $p,q,r$ intercambiadas. Intercambiar dos filas cambia el signo del determinante.
$\begin{vmatrix} a & b & c \\ p & q & r \\ x & y & z \end{vmatrix} = -3$.`,
  finalResult: String.raw`-3`,
  tip: "Cualquier combinación lineal que apliques a una fila sumando múltiplos de OTRA fila no altera en absoluto el determinante final.",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio A3 (Análisis)
dbEjercicios.push({
  id: "2022-EXT-A3",
  year: 2022,
  call: "Extraordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Calcula las rectas tangentes a la gráfica de la función $f(x) = 2x^3 - 3x + 1$ que son paralelas a la recta $y = 3x - 2$. Estudia los intervalos de crecimiento y decrecimiento de $f$.`,
  stepByStep: String.raw`Tangentes paralelas a $y = 3x - 2$ implica que $m = 3 \Rightarrow f'(x) = 3$.
$f'(x) = 6x^2 - 3$.
$6x^2 - 3 = 3 \Rightarrow 6x^2 = 6 \Rightarrow x^2 = 1 \Rightarrow x = 1, x = -1$.
Calculamos la ecuación para $x=1$:
$f(1) = 2 - 3 + 1 = 0 \Rightarrow$ Punto $(1,0)$. Tangente: $y - 0 = 3(x-1) \Rightarrow y = 3x - 3$.
Calculamos la ecuación para $x=-1$:
$f(-1) = -2 + 3 + 1 = 2 \Rightarrow$ Punto $(-1,2)$. Tangente: $y - 2 = 3(x+1) \Rightarrow y = 3x + 5$.

Intervalos de crecimiento (cuando $f'(x) > 0$) y decrecimiento ($f'(x) < 0$):
Raíces de $f'(x) = 6x^2 - 3 = 0 \Rightarrow x = \pm 1/\sqrt{2}$.
- $(-\infty, -1/\sqrt{2})$: Crece.
- $(-1/\sqrt{2}, 1/\sqrt{2})$: Decrece.
- $(1/\sqrt{2}, \infty)$: Crece.`,
  finalResult: String.raw`Tangentes: y = 3x - 3, y = 3x + 5. Crece: (-\infty, -1/\sqrt{2}) \cup (1/\sqrt{2}, \infty). Decrece: (-1/\sqrt{2}, 1/\sqrt{2})`,
  tip: "Para evitar fallos por olvidar despejar bien $x^2 = A$, saca siempre la raíz positiva y la negativa explícitamente.",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio B3 (Análisis)
dbEjercicios.push({
  id: "2022-EXT-B3",
  year: 2022,
  call: "Extraordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`[⚠️ REQUIERE VER GRÁFICA ORIGINAL] Sea $f(x) = \begin{cases} x^2 + Ax & \text{si } x \le 1 \\ Bx - A & \text{si } x > 1 \end{cases}$
(a) Encuentra los valores de $A$ y $B$ para que $f$ sea derivable en toda la recta real.
(b) Haz la representación gráfica de la función $f$ con los valores de $A$ y $B$ obtenidos.`,
  stepByStep: String.raw`a) Para ser derivable en $\mathbb{R}$, en particular debe ser continua y derivable en $x = 1$.
Continuidad en $x=1$: Límite por izquierda debe igualar a límite por derecha.
$f(1) = 1 + A$.
$\lim_{x \to 1^+} (Bx - A) = B - A$.
Igualamos: $1 + A = B - A \Rightarrow B = 2A + 1$.
Derivabilidad en $x=1$:
$f'(x) = \begin{cases} 2x + A & \text{si } x < 1 \\ B & \text{si } x > 1 \end{cases}$.
Igualamos las derivadas laterales: $2(1) + A = B \Rightarrow B = 2 + A$.
Tenemos un sistema:
$B = 2A + 1$
$B = 2 + A$
Igualando: $2A + 1 = A + 2 \Rightarrow A = 1$.
Sustituyendo: $B = 3$.

b) La función es $f(x) = x^2 + x$ (para $x \le 1$) y $f(x) = 3x - 1$ (para $x > 1$).
La primera parte es una parábola con vértice en $x = -0.5$. La segunda es una semirrecta con pendiente 3 que empalma perfectamente con la parábola en el punto $(1, 2)$.`,
  finalResult: String.raw`a) A = 1, B = 3 \quad b) Parábola y semirrecta empalmadas con pendiente 3 en (1,2)`,
  tip: "Una función definida a trozos solo será derivable en el punto de sutura si sus límites laterales, y los de su derivada, coinciden de manera rigurosa.",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio A4 (Integrales)
dbEjercicios.push({
  id: "2022-EXT-A4",
  year: 2022,
  call: "Extraordinaria",
  topic: "Integrales",
  statement: String.raw`Calcula $\int \ln(x^2 - 1) dx$.`,
  stepByStep: String.raw`Aplicamos integración por partes ($ALPES$):
$u = \ln(x^2 - 1) \Rightarrow du = \frac{2x}{x^2 - 1} dx$.
$dv = dx \Rightarrow v = x$.
$I = x \ln(x^2 - 1) - \int \frac{2x^2}{x^2 - 1} dx$.
Dividimos el polinomio del numerador entre el del denominador algebraicamente: $\frac{2x^2}{x^2 - 1} = 2 + \frac{2}{x^2 - 1}$.
Descomponemos $\frac{2}{(x-1)(x+1)}$ en fracciones simples:
$\frac{A}{x-1} + \frac{B}{x+1} \Rightarrow 2 = A(x+1) + B(x-1) \Rightarrow A = 1, B = -1$.
La integral a resolver queda:
$\int \left( 2 + \frac{1}{x-1} - \frac{1}{x+1} \right) dx = 2x + \ln|x-1| - \ln|x+1|$.
Sustituimos esto en nuestra fórmula por partes original (no olvidemos el signo menos):
$I = x \ln(x^2 - 1) - (2x + \ln|x-1| - \ln|x+1|) + K = x \ln(x^2 - 1) - 2x - \ln|x-1| + \ln|x+1| + K$.`,
  finalResult: String.raw`x \ln(x^2 - 1) - 2x - \ln|x-1| + \ln|x+1| + K`,
  tip: "La integral del logaritmo de una función polinómica suele exigir hacer la división de polinomios en el segundo paso. Intenta sacar el cociente entero sumando y restando el denominador en el numerador.",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio B4 (Integrales)
dbEjercicios.push({
  id: "2022-EXT-B4",
  year: 2022,
  call: "Extraordinaria",
  topic: "Integrales - Áreas",
  statement: String.raw`[⚠️ REQUIERE VER GRÁFICA ORIGINAL] Dibuja el recinto del primer cuadrante limitado por las gráficas de las funciones $f(x) = x$, $g(x) = x/8$ y $h(x) = \frac{1}{x^2}$ y calcula el área de ese recinto.`,
  stepByStep: String.raw`Hallamos los puntos de intersección entre las curvas:
1) $f(x)$ y $h(x)$: $x = \frac{1}{x^2} \Rightarrow x^3 = 1 \Rightarrow x = 1$.
2) $g(x)$ y $h(x)$: $\frac{x}{8} = \frac{1}{x^2} \Rightarrow x^3 = 8 \Rightarrow x = 2$.
3) $f(x)$ y $g(x)$: $x = x/8 \Rightarrow x = 0$.

El recinto queda dividido en dos partes por la intersección de $f$ y $h$ en $x=1$. El "suelo" siempre es $g(x) = x/8$.
Tramo 1 $[0, 1]$: techo $f(x) = x$, suelo $g(x) = x/8$.
Tramo 2 $[1, 2]$: techo $h(x) = 1/x^2$, suelo $g(x) = x/8$.
Área 1 $= \int_0^1 (x - x/8) dx = \int_0^1 \frac{7x}{8} dx = \left[ \frac{7x^2}{16} \right]_0^1 = \frac{7}{16}$.
Área 2 $= \int_1^2 (1/x^2 - x/8) dx = \left[ -\frac{1}{x} - \frac{x^2}{16} \right]_1^2 = \left( -\frac{1}{2} - \frac{4}{16} \right) - \left( -1 - \frac{1}{16} \right) = \left( -\frac{3}{4} \right) - \left( -\frac{17}{16} \right) = -\frac{12}{16} + \frac{17}{16} = \frac{5}{16}$.
Área Total $= 7/16 + 5/16 = 12/16 = 3/4$.`,
  finalResult: String.raw`3/4 \text{ u}^2`,
  tip: "Si tres funciones delimitan un recinto, SIEMPRE tendrás que partir la integral en dos (en la intersección que haga cambiar el 'techo' de la figura).",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio A5 (Probabilidad)
dbEjercicios.push({
  id: "2022-EXT-A5",
  year: 2022,
  call: "Extraordinaria",
  topic: "Probabilidad",
  statement: String.raw`Una urna S contiene 5 bolas blancas y 3 negras. Otra urna T, 6 blancas y 4 negras. Elegimos una urna al azar y extraemos dos bolas.
(a) ¿Cuál es la probabilidad de que las dos bolas extraídas sean negras?
(b) Si las dos bolas extraídas son negras, ¿cuál es la probabilidad de que la urna elegida haya sido la T?`,
  stepByStep: String.raw`a) La extracción de dos bolas se asume SIN reemplazamiento por defecto.
Probabilidad de extraer 2 negras de S: $P(2N|S) = \frac{3}{8} \cdot \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$.
Probabilidad de extraer 2 negras de T: $P(2N|T) = \frac{4}{10} \cdot \frac{3}{9} = \frac{12}{90} = \frac{2}{15}$.
Probabilidad total = $P(S)P(2N|S) + P(T)P(2N|T) = \frac{1}{2} \cdot \frac{3}{28} + \frac{1}{2} \cdot \frac{2}{15} = \frac{3}{56} + \frac{1}{15} = \frac{45}{840} + \frac{56}{840} = \frac{101}{840}$.

b) Aplicamos Bayes:
$P(T|2N) = \frac{P(T \cap 2N)}{P(2N)} = \frac{\frac{1}{2} \cdot \frac{2}{15}}{101/840} = \frac{56/840}{101/840} = \frac{56}{101}$.`,
  finalResult: String.raw`a) 101/840 \quad b) 56/101`,
  tip: "Mucha atención: cuando se extraen 'dos bolas a la vez', las probabilidades cambian entre la primera y la segunda bola. La segunda ya tiene el denominador un número menor.",
  requiresReview: false
});

// 2022 Extraordinaria - Ejercicio B5 (Estadística)
dbEjercicios.push({
  id: "2022-EXT-B5",
  year: 2022,
  call: "Extraordinaria",
  topic: "Estadística",
  statement: String.raw`Un estudio ha mostrado que, en un cierto barrio, el 60 % de los hogares tienen al menos dos coches. Se elige al azar una muestra de 50 hogares en el citado barrio.
(a) ¿Cuál es la probabilidad de que al menos 20 de los citados hogares tengan cuando menos dos coches?
(b) ¿Cuál es la probabilidad de que entre 30 y 40 hogares, ambos incluidos, tengan al menos dos coches?`,
  stepByStep: String.raw`Es un experimento Binomial $X \sim B(50, 0.6)$.
Media $\mu = 50(0.6) = 30$. Varianza $\sigma^2 = 50(0.6)(0.4) = 12$. Desviación típica $\sigma = \sqrt{12} \approx 3.46$.
Como $np, nq \ge 5$, podemos aproximar mediante una Normal $Y \sim N(30, 3.46)$ usando corrección por continuidad (Yates).

a) $P(X \ge 20) \approx P(Y \ge 19.5) = P\left(Z \ge \frac{19.5 - 30}{3.46}\right) = P(Z \ge -3.03) = P(Z \le 3.03) = 0.9988$.

b) $P(30 \le X \le 40) \approx P(29.5 \le Y \le 40.5) = P\left(\frac{29.5 - 30}{3.46} \le Z \le \frac{40.5 - 30}{3.46}\right) \approx P(-0.14 \le Z \le 3.03)$.
$= P(Z \le 3.03) - P(Z \le -0.14) = 0.9988 - (1 - P(Z \le 0.14)) = 0.9988 - (1 - 0.5557) = 0.9988 - 0.4443 = 0.5545$.`,
  finalResult: String.raw`a) 0.9988 \quad b) 0.5545`,
  tip: "La corrección de Yates ensancha los intervalos 0.5 puntos hacia cada extremo para compensar que una distribución continua incluya por completo las columnas discretas enteras.",
  requiresReview: false
});
