// ----------------------------------------------------
// ETL PIPELINE: EXÁMENES 2021 (ORDINARIA Y EXTRAORDINARIA)
// ----------------------------------------------------

// 2021 Ordinaria - Ejercicio A1 (Álgebra)
dbEjercicios.push({
  id: "2021-ORD-A1",
  year: 2021,
  call: "Ordinaria",
  topic: "Álgebra - Sistemas",
  statement: String.raw`Discutir el siguiente sistema de ecuaciones lineales, en función del parámetro $\alpha$:
$$ \begin{cases} \alpha x - y + z = 1 \\ 3x - y + \alpha z = \alpha \\ x + (\alpha - 1)z = 1 \end{cases} $$
Resolver el sistema para $\alpha = 3$, si es posible.`,
  stepByStep: String.raw`Calculamos el determinante de la matriz de coeficientes:
$|A| = \begin{vmatrix} \alpha & -1 & 1 \\ 3 & -1 & \alpha \\ 1 & 0 & \alpha-1 \end{vmatrix}$.
Resolviendo, obtenemos $|A| = -(\alpha - 2)(\alpha - 1)$.
- Si $\alpha \neq 1$ y $\alpha \neq 2$: $|A| \neq 0 \Rightarrow$ Sistema Compatible Determinado.
- Si $\alpha = 1$: Rango(A) = 2, Rango(A*) = 3 $\Rightarrow$ Sistema Incompatible.
- Si $\alpha = 2$: Rango(A) = 2, Rango(A*) = 2 $\Rightarrow$ Sistema Compatible Indeterminado.

Para $\alpha = 3$:
$|A| = -(3-2)(3-1) = -2$.
Sustituyendo $\alpha = 3$ y resolviendo (por ejemplo usando Cramer):
$x = \frac{\begin{vmatrix} 1 & -1 & 1 \\ 3 & -1 & 3 \\ 1 & 0 & 2 \end{vmatrix}}{-2} = -1$.
$y = -3, z = 1$.`,
  finalResult: String.raw`\alpha \neq 1, 2: SCD. \alpha=1: INCOMP. \alpha=2: SCI. Para \alpha=3: x=-1, y=-3, z=1`,
  tip: "Siempre factoriza el determinante para encontrar fácilmente las raíces que anulan la matriz de coeficientes.",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio B1 (Álgebra)
dbEjercicios.push({
  id: "2021-ORD-B1",
  year: 2021,
  call: "Ordinaria",
  topic: "Álgebra - Matrices",
  statement: String.raw`Sea la matriz
$$ A = \begin{pmatrix} 2 & 3 & \alpha \\ 1 & \alpha & 1 \\ 0 & \alpha & -1 \end{pmatrix} $$
a) Determinar para qué valores del parámetro $\alpha$ la matriz $A$ no tiene inversa.
b) Calcular, si es posible, la matriz inversa de $A$ para $\alpha = 2$.`,
  stepByStep: String.raw`a) Una matriz no tiene inversa si su determinante es cero.
$|A| = \begin{vmatrix} 2 & 3 & \alpha \\ 1 & \alpha & 1 \\ 0 & \alpha & -1 \end{vmatrix} = -2\alpha + 0 + \alpha^2 - 0 - 2\alpha + 3 = \alpha^2 - 4\alpha + 3$.
Igualamos a cero: $\alpha^2 - 4\alpha + 3 = 0 \Rightarrow (\alpha-1)(\alpha-3) = 0 \Rightarrow \alpha = 1, \alpha = 3$.
La matriz $A$ no tiene inversa para $\alpha = 1$ y $\alpha = 3$.

b) Para $\alpha = 2$, $|A| = 2^2 - 4(2) + 3 = -1 \neq 0$, por lo que sí tiene inversa.
$A = \begin{pmatrix} 2 & 3 & 2 \\ 1 & 2 & 1 \\ 0 & 2 & -1 \end{pmatrix}$.
Matriz adjunta traspuesta:
$Adj(A)^t = \begin{pmatrix} -4 & 7 & -1 \\ 1 & -2 & 0 \\ 2 & -4 & 1 \end{pmatrix}$.
Como $|A| = -1$, dividimos por -1:
$A^{-1} = \begin{pmatrix} 4 & -7 & 1 \\ -1 & 2 & 0 \\ -2 & 4 & -1 \end{pmatrix}$.`,
  finalResult: String.raw`a) \alpha = 1, \alpha = 3 \quad b) A^{-1} = \begin{pmatrix} 4 & -7 & 1 \\ -1 & 2 & 0 \\ -2 & 4 & -1 \end{pmatrix}`,
  tip: "Recuerda que $A^{-1} = \frac{1}{|A|} Adj(A)^t$. El orden al hacer la adjunta y luego trasponer (o viceversa) importa mucho para no equivocar signos.",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio A3 (Análisis)
dbEjercicios.push({
  id: "2021-ORD-A3",
  year: 2021,
  call: "Ordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Estudiar los máximos, los mínimos y los intervalos de crecimiento y decrecimiento de la función $f(x) = 5 + 8x^2 - x^4$. Representar la gráfica de $f$.`,
  stepByStep: String.raw`Derivamos la función: $f'(x) = 16x - 4x^3$.
Igualamos a cero para buscar puntos críticos:
$4x(4 - x^2) = 0 \Rightarrow 4x(2-x)(2+x) = 0 \Rightarrow x = -2, x = 0, x = 2$.
Estudiamos el signo de $f'(x)$ en los intervalos generados:
- $(-\infty, -2)$: $f'(-3) = -48 - 4(-27) = -48 + 108 > 0 \Rightarrow$ Crece.
- $(-2, 0)$: $f'(-1) = -16 + 4 < 0 \Rightarrow$ Decrece.
- $(0, 2)$: $f'(1) = 16 - 4 > 0 \Rightarrow$ Crece.
- $(2, \infty)$: $f'(3) = 48 - 108 < 0 \Rightarrow$ Decrece.
Por el cambio de signo de la derivada:
Máximos relativos en $x = -2$ y $x = 2$. Calculamos ordenadas: $f(-2) = 21, f(2) = 21$.
Mínimo relativo en $x = 0$. Ordenada: $f(0) = 5$.`,
  finalResult: String.raw`Crece: (-\infty, -2) \cup (0, 2). Decrece: (-2, 0) \cup (2, \infty). Máximos: (-2, 21), (2, 21). Mínimo: (0, 5).`,
  tip: "Al igualar a 0 derivadas polinómicas, saca factor común a la $x$ antes de aplicar fórmulas cuadráticas para no perder raíces como $x=0$.",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio B3 (Análisis)
dbEjercicios.push({
  id: "2021-ORD-B3",
  year: 2021,
  call: "Ordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Sea la función $f(x) = Ax^3 + Bx^2 + Cx + A$.
a) Obtener los valores de los parámetros $A, B$ y $C$ para que la gráfica de $f$ pase por el punto $(0, 1)$ y tenga un mínimo en el punto $(1, 1)$.
b) ¿La función obtenida tiene otros máximos o mínimos? En caso afirmativo, encontrarlos.`,
  stepByStep: String.raw`a) Pasa por $(0,1) \Rightarrow f(0) = 1 \Rightarrow A = 1$.
La función es $f(x) = x^3 + Bx^2 + Cx + 1$.
Derivada: $f'(x) = 3x^2 + 2Bx + C$.
Tiene un mínimo en $(1,1) \Rightarrow f(1) = 1$ y $f'(1) = 0$.
1) $f(1) = 1 \Rightarrow 1 + B + C + 1 = 1 \Rightarrow B + C = -1$.
2) $f'(1) = 0 \Rightarrow 3(1)^2 + 2B(1) + C = 0 \Rightarrow 2B + C = -3$.
Resolvemos el sistema restando las ecuaciones: $(2B+C) - (B+C) = -3 - (-1) \Rightarrow B = -2$.
Sustituyendo: $-2 + C = -1 \Rightarrow C = 1$.
Función obtenida: $f(x) = x^3 - 2x^2 + x + 1$.

b) Buscamos otros extremos relativos igualando $f'$ a cero:
$f'(x) = 3x^2 - 4x + 1 = 0 \Rightarrow x = \frac{4 \pm \sqrt{16 - 12}}{6} = \frac{4 \pm 2}{6} \Rightarrow x = 1, x = 1/3$.
Ya sabemos que en $x=1$ hay mínimo. En $x=1/3$ evaluamos la segunda derivada:
$f''(x) = 6x - 4 \Rightarrow f''(1/3) = 2 - 4 = -2 < 0 \Rightarrow$ Máximo en $x = 1/3$.
Ordenada del máximo: $f(1/3) = 1/27 - 2/9 + 1/3 + 1 = 31/27$.`,
  finalResult: String.raw`a) A=1, B=-2, C=1 \quad b) Sí, hay un máximo en (1/3, 31/27)`,
  tip: "Cuando un problema dice 'tiene un mínimo en (x,y)', esto te da DOS ecuaciones al instante: $f(x)=y$ y $f'(x)=0$.",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio A4 (Integrales)
dbEjercicios.push({
  id: "2021-ORD-A4",
  year: 2021,
  call: "Ordinaria",
  topic: "Integrales - Áreas",
  statement: String.raw`[⚠️ REQUIERE VER GRÁFICA ORIGINAL] Sean las funciones: $f(x) = 1/x$, $g(x) = x^2$, $h(x) = x^2/8$.
a) Dibujar el recinto finito, en el primer cuadrante, limitado por las gráficas de esas tres funciones.
b) Calcular el área de dicho recinto.`,
  stepByStep: String.raw`Hallamos los puntos de intersección entre las funciones en el primer cuadrante:
1) $g(x) = h(x) \Rightarrow x^2 = x^2/8 \Rightarrow x=0$. Intersección en $(0,0)$.
2) $f(x) = g(x) \Rightarrow 1/x = x^2 \Rightarrow x^3 = 1 \Rightarrow x=1$. Intersección en $(1,1)$.
3) $f(x) = h(x) \Rightarrow 1/x = x^2/8 \Rightarrow x^3 = 8 \Rightarrow x=2$. Intersección en $(2, 1/2)$.

El recinto está limitado por arriba por $g(x)$ entre $x=0$ y $x=1$, y por $f(x)$ entre $x=1$ y $x=2$.
Por abajo está limitado en todo el tramo por $h(x)$.
Dividimos la integral del área en dos tramos:
$A_1 = \int_0^1 (x^2 - x^2/8) dx = \int_0^1 \frac{7x^2}{8} dx = \left[ \frac{7x^3}{24} \right]_0^1 = \frac{7}{24}$.
$A_2 = \int_1^2 (1/x - x^2/8) dx = \left[ \ln|x| - \frac{x^3}{24} \right]_1^2 = (\ln 2 - 8/24) - (\ln 1 - 1/24) = \ln 2 - 7/24$.
Área total = $A_1 + A_2 = 7/24 + \ln 2 - 7/24 = \ln 2$.`,
  finalResult: String.raw`\ln 2 \text{ u}^2`,
  tip: "Dibuja un croquis a mano para saber quién es 'el techo' y quién 'el suelo' en cada tramo.",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio B4 (Integrales)
dbEjercicios.push({
  id: "2021-ORD-B4",
  year: 2021,
  call: "Ordinaria",
  topic: "Integrales",
  statement: String.raw`Calcular, explicando los métodos utilizados:
a) $I = \int (x + 2) \sin(2x) dx$
b) $J = \int \frac{x+7}{x^2 - 4x - 5} dx$`,
  stepByStep: String.raw`a) Usamos integración por partes ($ALPES$):
$u = x+2 \Rightarrow du = dx$.
$dv = \sin(2x) dx \Rightarrow v = -\frac{\cos(2x)}{2}$.
$I = (x+2)\left(-\frac{\cos(2x)}{2}\right) - \int -\frac{\cos(2x)}{2} dx = -\frac{(x+2)\cos(2x)}{2} + \frac{1}{2} \frac{\sin(2x)}{2} + C = -\frac{(x+2)\cos(2x)}{2} + \frac{\sin(2x)}{4} + C$.

b) Integral racional. Factorizamos el denominador:
$x^2 - 4x - 5 = 0 \Rightarrow x = 5, x = -1$.
Descomponemos en fracciones simples:
$\frac{x+7}{(x-5)(x+1)} = \frac{A}{x-5} + \frac{B}{x+1} \Rightarrow x+7 = A(x+1) + B(x-5)$.
Si $x = 5 \Rightarrow 12 = 6A \Rightarrow A = 2$.
Si $x = -1 \Rightarrow 6 = -6B \Rightarrow B = -1$.
Integramos:
$J = \int \frac{2}{x-5} dx + \int \frac{-1}{x+1} dx = 2\ln|x-5| - \ln|x+1| + C$.`,
  finalResult: String.raw`a) -\frac{(x+2)\cos(2x)}{2} + \frac{\sin(2x)}{4} + C \quad b) 2\ln|x-5| - \ln|x+1| + C`,
  tip: "En integrales por partes de tipo polinómica por trigonométrica, asegúrate de dividir por la derivada del argumento al integrar la trigonométrica ($dv \to v$).",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio A5 (Probabilidad)
dbEjercicios.push({
  id: "2021-ORD-A5",
  year: 2021,
  call: "Ordinaria",
  topic: "Probabilidad",
  statement: String.raw`En una farmacia se ha recibido un lote de medicamentos de los tipos A, I y M. El 80 % corresponde al medicamento A, el 10 % al I y el resto al M. En la revisión realizada por la farmacéutica se ha observado que hay medicamentos caducados en los siguientes porcentajes: el 10 % de A, el 20 % de I y el 5 % de M. Se elige una caja de medicamentos al azar. Hallar:
a) La probabilidad de coger un medicamento caducado.
b) Si sabemos que el medicamento está caducado, la probabilidad de que sea del tipo A.`,
  stepByStep: String.raw`Definimos los sucesos: $A, I, M$ para cada tipo. Probabilidades: $P(A)=0.8, P(I)=0.1, P(M)=0.1$.
Sea $C$ el suceso "estar caducado". Probabilidades condicionadas dadas:
$P(C|A)=0.10, P(C|I)=0.20, P(C|M)=0.05$.

a) Aplicamos el Teorema de la Probabilidad Total para calcular $P(C)$:
$P(C) = P(A)P(C|A) + P(I)P(C|I) + P(M)P(C|M) = (0.8 \cdot 0.10) + (0.1 \cdot 0.20) + (0.1 \cdot 0.05) = 0.08 + 0.02 + 0.005 = 0.105$.

b) Aplicamos el Teorema de Bayes para calcular $P(A|C)$:
$P(A|C) = \frac{P(A \cap C)}{P(C)} = \frac{P(A)P(C|A)}{P(C)} = \frac{0.08}{0.105} \approx 0.7619$.`,
  finalResult: String.raw`a) 0.105 \quad b) 0.7619`,
  tip: "Siempre que te pidan la probabilidad de 'lo que ya ha pasado' (Bayes), debes dividir la rama correspondiente del árbol entre la probabilidad total obtenida en la pregunta anterior.",
  requiresReview: false
});

// 2021 Ordinaria - Ejercicio B5 (Estadística)
dbEjercicios.push({
  id: "2021-ORD-B5",
  year: 2021,
  call: "Ordinaria",
  topic: "Estadística",
  statement: String.raw`En una ciudad se han elegido al azar 3900 personas. Hallar:
a) La probabilidad de que al menos 15 de ellas cumplan años el día del patrón de la ciudad.
b) La probabilidad de que el número de personas que cumplan años el día del patrón esté comprendido entre 5 y 15, ambos incluidos.`,
  stepByStep: String.raw`Es un experimento binomial $X \sim B(n, p)$ con $n = 3900$ y $p = 1/365$.
Media $\mu = np = 3900 / 365 = 10.68$.
Varianza $\sigma^2 = npq = 10.68 \cdot (364/365) = 10.65$. Desviación típica $\sigma = \sqrt{10.65} = 3.26$.
Como $np > 5$ y $nq > 5$, podemos aproximar a una Normal $Y \sim N(10.68, 3.26)$, aplicando corrección por continuidad de Yates.

a) $P(X \ge 15) \approx P(Y \ge 14.5) = P(Z \ge \frac{14.5 - 10.68}{3.26}) = P(Z \ge 1.17) = 1 - P(Z < 1.17) = 1 - 0.8790 = 0.121$.

b) $P(5 \le X \le 15) \approx P(4.5 \le Y \le 15.5) = P(\frac{4.5 - 10.68}{3.26} \le Z \le \frac{15.5 - 10.68}{3.26})$
$= P(-1.90 \le Z \le 1.48) = P(Z \le 1.48) - P(Z \le -1.90) = 0.9306 - (1 - P(Z \le 1.90)) = 0.9306 - (1 - 0.9713) = 0.9306 - 0.0287 = 0.9019$.`,
  finalResult: String.raw`a) 0.121 \quad b) 0.9019`,
  tip: "Al aproximar de Binomial a Normal, nunca te olvides de sumar o restar 0.5 (la corrección de Yates) a los extremos antes de tipificar.",
  requiresReview: false
});

// --- 2021 EXTRAORDINARIA ---

// 2021 Extraordinaria - Ejercicio A1 (Álgebra)
dbEjercicios.push({
  id: "2021-EXT-A1",
  year: 2021,
  call: "Extraordinaria",
  topic: "Álgebra - Sistemas",
  statement: String.raw`Discutir el sistema de ecuaciones lineales que sigue, en función del parámetro $\alpha$:
$$ \begin{cases} \alpha x + 2y - z = \alpha \\ 2x + \alpha y + z = 2 + \alpha \\ x - \alpha y + 2z = 2\alpha \end{cases} $$
Resolver el sistema para $\alpha = 1$, si es posible.`,
  stepByStep: String.raw`Calculamos el determinante de la matriz de coeficientes:
$|A| = \begin{vmatrix} \alpha & 2 & -1 \\ 2 & \alpha & 1 \\ 1 & -\alpha & 2 \end{vmatrix} = 2\alpha^2 + 2 + 2\alpha - (-\alpha - \alpha^2 + 8) = 3\alpha^2 + 3\alpha - 6 = 3(\alpha^2 + \alpha - 2)$.
Igualamos a cero: $\alpha^2 + \alpha - 2 = 0 \Rightarrow \alpha = \frac{-1 \pm \sqrt{1 + 8}}{2} \Rightarrow \alpha = 1, \alpha = -2$.
- Si $\alpha \neq 1$ y $\alpha \neq -2$: $|A| \neq 0 \Rightarrow$ SCD.
- Si $\alpha = -2$: El rango de A es 2. Analizamos la matriz ampliada tomando la tercera columna, la de términos independientes y una más. Rango(A*) = 3 $\Rightarrow$ Sistema Incompatible.
- Si $\alpha = 1$: El rango de A es 2. Analizando la ampliada observamos que su rango también es 2 $\Rightarrow$ SCI.

Para $\alpha = 1$:
Ecuaciones independientes: $x + 2y - z = 1$ y $2x + y + z = 3$.
Sumando ambas: $3x + 3y = 4 \Rightarrow y = \frac{4 - 3x}{3} = \frac{4}{3} - x$.
Sustituyendo $y$: $x + 2(\frac{4}{3} - x) - z = 1 \Rightarrow x + \frac{8}{3} - 2x - z = 1 \Rightarrow -x - z = 1 - 8/3 \Rightarrow z = 5/3 - x$.
Parametrizando con $x = \lambda$: $(\lambda, \frac{4}{3} - \lambda, \frac{5}{3} - \lambda)$.`,
  finalResult: String.raw`\alpha \neq 1, -2: SCD. \alpha=-2: INCOMP. \alpha=1: SCI con solución (\lambda, 4/3 - \lambda, 5/3 - \lambda)`,
  tip: "Los sistemas con infinitas soluciones se resuelven pasando una variable al lado derecho como parámetro libre (t o $\lambda$) y despejando las demás.",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio B1 (Álgebra)
dbEjercicios.push({
  id: "2021-EXT-B1",
  year: 2021,
  call: "Extraordinaria",
  topic: "Álgebra - Matrices",
  statement: String.raw`Sean $A = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 2 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 2 & 2 \\ 0 & 1 \end{pmatrix}$.
Calcular la matriz $X$ de orden $2 \times 2$ que verifica $A^2 \cdot X + B = C$.`,
  stepByStep: String.raw`Despejamos $X$ matricialmente:
$A^2 X = C - B \Rightarrow X = (A^2)^{-1}(C - B)$.
1) Calculamos $A^2$:
$A^2 = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ -4 & 1 \end{pmatrix}$.
2) Calculamos la inversa de $A^2$:
El determinante de $A^2$ es 1.
$(A^2)^{-1} = \frac{1}{1} \begin{pmatrix} 1 & 0 \\ 4 & 1 \end{pmatrix}^t = \begin{pmatrix} 1 & 0 \\ 4 & 1 \end{pmatrix}$.
3) Calculamos $C - B$:
$C - B = \begin{pmatrix} 2 - 2 & 2 - 0 \\ 0 - 2 & 1 - 1 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$.
4) Multiplicamos:
$X = \begin{pmatrix} 1 & 0 \\ 4 & 1 \end{pmatrix} \begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ -2 & 8 \end{pmatrix}$.`,
  finalResult: String.raw`X = \begin{pmatrix} 0 & 2 \\ -2 & 8 \end{pmatrix}`,
  tip: "Al despejar matrices, el orden importa: si multiplicas por la inversa por la izquierda en un lado, DEBE ser por la izquierda en el otro.",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio A3 (Análisis)
dbEjercicios.push({
  id: "2021-EXT-A3",
  year: 2021,
  call: "Extraordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Estudiar los intervalos de crecimiento y decrecimiento de la función $f(x) = \frac{x-4}{x^2-4}$ y calcular sus máximos y mínimos.`,
  stepByStep: String.raw`Dominio de $f$: $\mathbb{R} \setminus \{-2, 2\}$.
Derivada usando regla del cociente:
$f'(x) = \frac{1 \cdot (x^2-4) - (x-4) \cdot 2x}{(x^2-4)^2} = \frac{x^2 - 4 - 2x^2 + 8x}{(x^2-4)^2} = \frac{-x^2 + 8x - 4}{(x^2-4)^2}$.
Buscamos puntos críticos igualando el numerador a cero:
$-x^2 + 8x - 4 = 0 \Rightarrow x = \frac{-8 \pm \sqrt{64 - 16}}{-2} = \frac{-8 \pm \sqrt{48}}{-2} = 4 \pm \sqrt{12} = 4 \pm 2\sqrt{3}$.
Los valores críticos son $x_1 \approx 0.53$ y $x_2 \approx 7.46$.
Analizamos el signo de $f'$ en los intervalos, teniendo en cuenta las asíntotas en $-2$ y $2$:
- $(-\infty, -2)$: $f'(-3) < 0 \Rightarrow$ Decrece.
- $(-2, 4-2\sqrt{3})$: $f'(0) < 0 \Rightarrow$ Decrece.
- $(4-2\sqrt{3}, 2)$: $f'(1) > 0 \Rightarrow$ Crece.
- $(2, 4+2\sqrt{3})$: $f'(3) > 0 \Rightarrow$ Crece.
- $(4+2\sqrt{3}, \infty)$: $f'(8) < 0 \Rightarrow$ Decrece.
Hay un mínimo relativo en $x = 4-2\sqrt{3}$ y un máximo relativo en $x = 4+2\sqrt{3}$.`,
  finalResult: String.raw`Crece: (4-2\sqrt{3}, 2) \cup (2, 4+2\sqrt{3}). Decrece: (-\infty, -2) \cup (-2, 4-2\sqrt{3}) \cup (4+2\sqrt{3}, \infty). Mín: x = 4-2\sqrt{3}. Máx: x = 4+2\sqrt{3}`,
  tip: "Al dar intervalos de crecimiento, nunca olvides partir los tramos allá donde haya asíntotas verticales del dominio original, aunque la derivada no cambie de signo allí.",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio B3 (Análisis)
dbEjercicios.push({
  id: "2021-EXT-B3",
  year: 2021,
  call: "Extraordinaria",
  topic: "Análisis - Funciones",
  statement: String.raw`Sea $f(x) = x^4 + Ax^2 + Bx + C$. Obtener los valores de $A, B$ y $C$ para que en el punto de abscisa $x=0$ la recta tangente a la gráfica de $f$ sea $y = 2x - 1$ y en el punto de abscisa $x=1$ la recta tangente sea horizontal. El extremo situado en $x=1$, ¿es máximo o mínimo?`,
  stepByStep: String.raw`1) Tangente en $x=0$ es $y = 2x - 1$.
Esto significa que $f(0)$ coincide con la recta en $x=0$, es decir, $y(0) = -1$. Y la pendiente de $f$ en $x=0$ es la pendiente de la recta, $m = 2$.
$f(0) = C \Rightarrow C = -1$.
$f'(x) = 4x^3 + 2Ax + B \Rightarrow f'(0) = B \Rightarrow B = 2$.
2) Tangente horizontal en $x=1 \Rightarrow f'(1) = 0$.
$f'(1) = 4(1)^3 + 2A(1) + 2 = 0 \Rightarrow 4 + 2A + 2 = 0 \Rightarrow 2A = -6 \Rightarrow A = -3$.
La función es $f(x) = x^4 - 3x^2 + 2x - 1$.

3) Para saber si es máximo o mínimo, hallamos $f''(x)$:
$f''(x) = 12x^2 - 6$.
Evaluamos en el punto crítico $x=1$:
$f''(1) = 12(1)^2 - 6 = 6 > 0 \Rightarrow$ Es un mínimo relativo.`,
  finalResult: String.raw`A=-3, B=2, C=-1. En x=1 hay un mínimo relativo.`,
  tip: "La recta tangente a una función en un punto comparte tanto el punto por el que pasa (evaluar en la original) como la pendiente (evaluar en la derivada).",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio A4 (Integrales)
dbEjercicios.push({
  id: "2021-EXT-A4",
  year: 2021,
  call: "Extraordinaria",
  topic: "Integrales - Áreas",
  statement: String.raw`Dibujar el recinto limitado por las parábolas $y = 4x - x^2$ e $y = x^2 - 6$ y calcular su área.`,
  stepByStep: String.raw`Hallamos los puntos de corte entre ambas funciones igualándolas:
$4x - x^2 = x^2 - 6 \Rightarrow 2x^2 - 4x - 6 = 0 \Rightarrow x^2 - 2x - 3 = 0$.
Resolvemos la ecuación de segundo grado: $x = \frac{2 \pm \sqrt{4 - 4(1)(-3)}}{2} = \frac{2 \pm \sqrt{16}}{2} \Rightarrow x = -1, x = 3$.
En el intervalo $(-1, 3)$, tomamos $x=0$ para ver qué función va por arriba:
$f_1(0) = 0$, $f_2(0) = -6 \Rightarrow 4x - x^2$ es el techo y $x^2 - 6$ es el suelo.
El área se calcula con la integral definida de la diferencia:
$A = \int_{-1}^{3} [(4x - x^2) - (x^2 - 6)] dx = \int_{-1}^{3} (-2x^2 + 4x + 6) dx$.
Primitiva: $\left[ -\frac{2x^3}{3} + 2x^2 + 6x \right]_{-1}^{3}$.
Evaluamos en 3: $-\frac{2(27)}{3} + 2(9) + 6(3) = -18 + 18 + 18 = 18$.
Evaluamos en -1: $-\frac{2(-1)}{3} + 2(1) + 6(-1) = 2/3 + 2 - 6 = 2/3 - 4 = -10/3$.
Restamos (Barrow): $18 - (-10/3) = \frac{54}{3} + \frac{10}{3} = \frac{64}{3}$.`,
  finalResult: String.raw`64/3 \text{ u}^2`,
  tip: "El área entre dos curvas se reduce a buscar las intersecciones e integrar 'Techo - Suelo'.",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio B4 (Integrales)
dbEjercicios.push({
  id: "2021-EXT-B4",
  year: 2021,
  call: "Extraordinaria",
  topic: "Integrales",
  statement: String.raw`Calcular $\int x \ln(x+1) dx$, explicando el método utilizado.`,
  stepByStep: String.raw`Utilizamos integración por partes ($ALPES$):
$u = \ln(x+1) \Rightarrow du = \frac{1}{x+1} dx$.
$dv = x dx \Rightarrow v = \frac{x^2}{2}$.
$I = \frac{x^2}{2} \ln(x+1) - \int \frac{x^2}{2(x+1)} dx = \frac{x^2}{2} \ln(x+1) - \frac{1}{2} \int \frac{x^2}{x+1} dx$.

Para resolver la integral de la fracción impropia, sumamos y restamos 1 en el numerador (truco algebraico rápido):
$\frac{x^2 - 1 + 1}{x+1} = \frac{(x-1)(x+1) + 1}{x+1} = x - 1 + \frac{1}{x+1}$.
$\int \left( x - 1 + \frac{1}{x+1} \right) dx = \frac{x^2}{2} - x + \ln|x+1|$.
Sustituyendo de vuelta:
$I = \frac{x^2}{2} \ln(x+1) - \frac{1}{2}\left( \frac{x^2}{2} - x + \ln|x+1| \right) + C$.
Agrupando términos:
$I = \frac{x^2 - 1}{2} \ln(x+1) - \frac{x^2}{4} + \frac{x}{2} + C$.`,
  finalResult: String.raw`\frac{x^2 - 1}{2} \ln(x+1) - \frac{x^2}{4} + \frac{x}{2} + C`,
  tip: "Para evitar la división polinómica formal en fracciones racionales, prueba a sumar y restar números mágicos en el numerador para formar cuadrados perfectos o diferencias de cuadrados.",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio A5 (Probabilidad)
dbEjercicios.push({
  id: "2021-EXT-A5",
  year: 2021,
  call: "Extraordinaria",
  topic: "Probabilidad",
  statement: String.raw`De los 700 estudiantes que tiene un centro escolar se sabe que 500 proceden del barrio donde está ubicado el centro, 575 utilizan el servicio de comedor y 400 son del barrio y utilizan el servicio de comedor. Se escoge un estudiante al azar.
a) Si es del barrio, ¿cuál es la probabilidad de que use el servicio de comedor?
b) Si usa el servicio de comedor, ¿cuál es la probabilidad de que no proceda del barrio?
c) ¿Cuál es la probabilidad de que sea del barrio o use el servicio de comedor?
d) ¿Cuál es la probabilidad de que no sea del barrio ni utilice el servicio de comedor?`,
  stepByStep: String.raw`Definimos los sucesos: $B$ (ser del barrio), $C$ (usar comedor).
Datos: $n = 700$. $|B| = 500 \Rightarrow P(B) = 500/700 = 5/7$.
$|C| = 575 \Rightarrow P(C) = 575/700 = 23/28$.
$|B \cap C| = 400 \Rightarrow P(B \cap C) = 400/700 = 4/7$.

a) Probabilidad condicionada: $P(C|B) = \frac{P(C \cap B)}{P(B)} = \frac{400/700}{500/700} = 400/500 = 4/5 = 0.8$.
b) No proceder del barrio si sabemos que usa el comedor ($B'$): $P(B'|C) = \frac{P(B' \cap C)}{P(C)}$.
Sabiendo que $|C| = 575$ y de esos 400 son del barrio, los que NO son del barrio pero usan el comedor son $575 - 400 = 175$.
$P(B'|C) = \frac{175}{575} \approx 0.304$.
c) Unión: $P(B \cup C) = P(B) + P(C) - P(B \cap C) = \frac{500+575-400}{700} = \frac{675}{700} \approx 0.964$.
d) Intersección de contrarios: $P(B' \cap C') = P((B \cup C)') = 1 - P(B \cup C) = 1 - \frac{675}{700} = \frac{25}{700} \approx 0.0357$.`,
  finalResult: String.raw`a) 0.8 \quad b) \approx 0.304 \quad c) \approx 0.964 \quad d) \approx 0.0357`,
  tip: "A veces es más fácil y directo razonar por recuento de casos favorables ($|A|$) que operar con fracciones de probabilidades, especialmente en datos poblacionales cerrados.",
  requiresReview: false
});

// 2021 Extraordinaria - Ejercicio B5 (Estadística)
dbEjercicios.push({
  id: "2021-EXT-B5",
  year: 2021,
  call: "Extraordinaria",
  topic: "Estadística",
  statement: String.raw`La estatura de los individuos de una población sigue una distribución normal de media $1.74$ m y desviación típica $0.05$ m. Se elige un individuo al azar.
a) ¿Cuál es la probabilidad de que tenga una estatura igual o inferior a la media?
b) ¿Cuál es la probabilidad de que su estatura esté comprendida entre 1.64 y 1.84 m?
c) Si la población está compuesta por 1500 individuos, ¿Cuántos tienen una estatura inferior a 1.54 m?`,
  stepByStep: String.raw`Sea $X \sim N(1.74, 0.05)$.
a) La Normal es simétrica respecto a su media. Por definición teórica, $P(X \le \mu) = 0.5$.

b) $P(1.64 < X < 1.84) = P(\frac{1.64 - 1.74}{0.05} < Z < \frac{1.84 - 1.74}{0.05}) = P(\frac{-0.10}{0.05} < Z < \frac{0.10}{0.05}) = P(-2 < Z < 2) = P(Z < 2) - P(Z < -2) = P(Z < 2) - (1 - P(Z < 2)) = 2 \cdot P(Z < 2) - 1$.
Buscando en tablas: $P(Z < 2) = 0.9772$.
Probabilidad $= 2(0.9772) - 1 = 1.9544 - 1 = 0.9544$.

c) $P(X < 1.54) = P(Z < \frac{1.54 - 1.74}{0.05}) = P(Z < \frac{-0.20}{0.05}) = P(Z < -4)$.
Para valores de $Z < -3.5$, la probabilidad es prácticamente 0 (se asume $0.0000$).
Por lo tanto, la cantidad esperada de personas es $1500 \cdot 0 = 0$.`,
  finalResult: String.raw`a) 0.5 \quad b) 0.9544 \quad c) Ningún individuo`,
  tip: "La probabilidad de estar por encima o por debajo de la media exacta de cualquier campana de Gauss es siempre del 50% matemáticamente, sin necesidad de tipificar.",
  requiresReview: false
});
