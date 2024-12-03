function SupperFunction(flag1) {
    this.flag1 = flag1
}

function Function(flag2) {
    SupperFunction.call(this)
    this.flag2 = flag2
}

let superInstance = new SupperFunction(true)

Function.prototype = superInstance

let subInstance = new Function(false)

//子调用自己和父的属性
console.log(subInstance.flag1)   // true
console.log(subInstance.flag2)   // false

/**
 * <pre class="prettyprint lang-cpp">#include&lt;iostream&gt;
 * #include&lt;vector&gt;
 * #include&lt;algorithm&gt;
 * using namespace std;
 * void result(vector&lt;int&gt;&amp;a, int n);
 * int main()
 * {
 *     int num;
 *     while (cin &gt;&gt; num)
 *     {
 *         int temp;
 *         vector&lt;int&gt;data;
 *         for (int i = 0; i &lt; num; ++i)
 *         {
 *             cin &gt;&gt; temp;
 *             data.push_back(temp);
 *         }
 *         result(data, num);
 *     }
 *     return 0;
 * }
 *
 * void result(vector&lt;int&gt;&amp;a, int n)
 * {
 *     if (n &gt; 1)
 *     {
 *         sort(a.begin(), a.end());
 *         int m1 = 1;
 *         int m2 = 1;
 *         for (int i = 0; i &lt; n-1; ++i)
 *         {
 *             if (a[i + 1] != a[i])
 *                 break;
 *             ++m1;
 *         }
 *         for (int i = n - 1; i &gt; 0; --i)
 *         {
 *             if (a[i - 1] != a[i])
 *                 break;
 *             ++m2;
 *         }
 *         int max = m1*m2;
 *
 *         int min_temp = a[1] - a[0];
 *         int min = 0;
 *         for (int i = 2; i &lt; n; ++i)
 *             if (a[i] - a[i - 1] &lt; min_temp)
 *                 min_temp = a[i] - a[i - 1];
 *         if (min_temp == 0)
 *         {
 *             for (int i = 1; i &lt; n; ++i)
 *             {
 *                 int j = i - 1;
 *                 while (j &gt;= 0 &amp;&amp; a[j] == a[i])
 *                 {
 *                     ++min;
 *                     --j;
 *                 }
 *             }
 *         }
 *         else
 *         {
 *             for (int i = 1; i &lt; n; ++i)
 *                 if (a[i] - a[i - 1] == min_temp)
 *                     ++min;
 *         }
 *         cout &lt;&lt; min &lt;&lt; ' ' &lt;&lt; max &lt;&lt; endl;
 *     }
 * }</pre> <br>
 */