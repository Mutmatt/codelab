import { Component } from '@angular/core';
import {
  bootstrap,
  builder,
  exercise,
  stylesheet
} from '../../../../../codelab/src/app/shared/helpers/helpers';

declare const require;

@Component({
  selector: 'kirjs-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {
  fontSize = 20;

  code = {
    circle: `<circle cx="200"
  cy="200"
  r="150"
  fill="pink"
  stroke="black"
  stroke-width="20">
</circle>`,

    ellipse: `<ellipse cx="300"
        cy="175"
        rx="240"
        ry="140"
        fill="pink"
        stroke="black"
        stroke-width="20"/>`,
    rect: `<rect x="100"
  width="200"
  y="100"
  height="200"
  fill="pink"
  stroke="black"
  stroke-width="20">
</rect>`,

    line: `<line x1="100"
  x2="300"
  y1="300"
  y2="100"
  stroke="pink"
  stroke-width="20">
</line>`,

    text: `<text x=20
  y="400"
  font-size="400"
  fill="pink"
  stroke="black"
  stroke-width=10>
LOL❤
</text>`,

    group: `<g style="transform: translate(200px, 200px)">
  <circle r=180 fill="pink"></circle>
  <text fill="pink"
    font-size="200px"
    stroke="black"
    stroke-width="4"
   >LOL</text>
</g>
`,
    polygon: `<polygon points="200,10 250,190 160,310 400,200"
  fill="pink"
  stroke="black"
  stroke-width="20"/>`,

    path: `<path d="M 40 220 L 200 20, 550 130 Z"
    fill="pink"
    stroke="black"
    stroke-width=20
    />
`,

    clip: `<defs>
  <clipPath id="myClip">
    <circle cx="230" cy="110" r="100"/>
  </clipPath>
</defs>

<path d="M 40 220 L 200 20, 550 130 Z"
    fill="pink"
     clip-path="url(#myClip)"
    stroke="black"
    stroke-width=20
    />
`,

    gifang: `
    GIF89ahh˜  
tzìu=1√≥™<BXÅ[Iºózß]LH
÷ô~\\^gy]t‘œ–ìíòŒ|j∂ó©\\C4ê|r‹¥ízkf∞|å$&1VE\\òMAH3.≤®ßèèê\\?≥ãgxL:_3"
+M©lUZTSvMP{l{ƒ¶èΩ¥ªï\\Zq|§«òß¬|eìáÉ;Eg∆òt46AólxVEBïkRØéê»´¢÷©ÅΩm_7)(ê
âïælphE=¢}cdoê}]Wﬂƒ±XVg–¥ΩÖM6&ël_øéóæèhkkw±†¢¶uZÜMMíó∫ﬁ»¿ëdZ®rsLSoüåí
‚ﬁﬂzd^h\`^ícFƒöà∏òâß]VÂòÑ≤¨∏49P_<1LNXO;3◊¨∏ïu}4)4ﬂœ«æ||°xÄá©F&òt\`IDC§
üü“√∫œéöiLC–¥•ÑáîÁßåU'ÃÜèÏ¥–Ìﬂ⁄hC3¬ÖéóUQÉ}~¢îê5÷ò†°à}‡ê}§ò¨,/<tÉÆcsû
Ê…⁄‡ÿ€fVQ…´≈åçØE*&ÇcL®dJÄrk[gé/! ¬º¿l6,Ã®å<<Q¸÷Ù–ÉoôUAzS@yUPõrS√sc∫üè“ª´
≤ézæëvKV~edwIGR–«»,(2¥kYº†¢¥tZl=,T4,$ (‹íú∞Ñd‘◊‹ﬁ∫õØÖï üxUMMáT9àUQkJ4I
Mh[_xêÄ~º©•\`6.<9>Ì‘…≤è™T2>lrèÏ»æ¥srº≠∂2=e}â¥T)$§VN}í¢ó†$"4ltûtE0UN^∆†
£ΩÖb9/,≠Öx∆†ä61:‰◊Ã…ü∏¿É~⁄†¢                                            
                                                                        
                            !ˇNETSCAPE2.0   !˘  ˇ ,    hh ˇ …$3ã ¡Ç≥∂X
∂l'Q!rZFFF32J»qFå+j R1Ñ&ì!BdQ9∞„2d≥ê5D&ŸdVT•*œî))J®—£Gy*UıÇÈXï¢F
•4Ç-d∞6
JW@G¡ÜKv¨Y(^—ûÖÇ‘®*22¸IîàŒ,-+™
±W/ﬂ∂Å* úrØ…•ÇCÙHYlpOUö k*69K±=äeŸúEìÁŒûCãΩÇF®SkruY”R§ÄƒBª6;r„∆- NoQÑÂÊ¥ß!√+ß5e"‚£E”:;dhì”√
¿EÌà!A--§{ˇˇXëIü#}nÓ)∞£Ã29Ÿ¨qSÊ›Å|y˙LLtË–∞f	TaK1e REïÅ!XiÒVd4•
 _˝ r5\`ÄC	Ö)±’’ÜæEDlR,)•“^+Ωh“bHfTQd ïÅÍŸ8Xå=(ôeCVñEL®ƒŸf°†…
O %PÆ •iß•∆àìÆ I@∞ëblv»V¶e
'\\o¡«Ip¬7—{Ñáör:∞Ã\`êw-d"π!"úÃ¢IA›]Ëüê
‰ìy˙ÌEÜ~ZpD”¶/·dM-h·ßE'!µÿÖ˛	»ñY¸’ËóaHˇeF%0hï@ZhÚBÑ!¨ÍVY^8Vá])êñWC±eÏ∞Ã¶4K\\òQXùÙO≈»XjR*u+òPêπï
“zà…òb!(ëìU¶‰g£yÊ§üÙbâÂîöL)•+¨e—Bcé)¶ò”Ü&¿π	£¬¬q"ùw≈ñÆdíâû-D˙®¶-X˜&pÿ%ö£ëöñë…˘˘d=™g^G1—I”M7…∑L
AÜ.RÉıÍÛàHâ’´Ø}Ÿà hƒ:´fD(5‰¯DPf8V÷Aı@Z…~»÷ÿj±*¢cp°∏I]Ωóay˝¥_∂1ÿ^æ˙§‘•è•ˇ´ä@éKŸ∫#i÷ô+Ò>ôÔiR¢
∆8F£ŒõØg≈√Ñkì‚KÊ∑’Ê€nº˘Ñ√p«Pq™YÃ»|§1Ãß[G(°¿!≥Ë»ôÏg{ÅDíg=xPB‡¡ƒißÆ¥íE·¶Îºœfá8¥–!¢E˝ç¨bH%fP	®µ
ÉRkÒ”˘]V_¿RËïá\`•µlŸÈ
ˇÆ'F[ó@}˜£_GŸOèå¢Ä¡Ù¨@<·€^òí≈–»2=°úez¿§ƒÂK#π#4±%œ@Ip“
,óFp¢Lö„\\l“tÏ‰¬ é¬‹DßâDÏ
À@M≈zÄC‰hÃO0ÉœKˇ¨ìõÏà¨Q)
`,

    angular: `<!--  viewBox="0 0 250 250" --><style type="text/css">
	.st0{fill:#DD0031;}
	.st1{fill:#C3002F;}
	.st2{fill:#FFFFFF;}
</style>
<g>
	<polygon class="st0" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 	"/>
	<polygon class="st1" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 	"/>
	<path class="st2" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
		L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/>
</g>

`,
    clip2: `<defs>
  <clipPath id="myClip">
  <text x=100
  y="160"
  font-size="200">
  LOL
  </text>
  </clipPath>
</defs>

<path d="M 40 220 L 200 20, 550 130 Z"
    fill="pink"
     clip-path="url(#myClip)"
    stroke="black"
    stroke-width=20
    />
`,
    textPath: `<defs>
  <path d="M 40 220 L 200 20, 550 130 Z"
      id="p"/>
</defs>

<text font-size="20">
    <textPath xLink href="#p">
        SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥SVG❤️Angular🔥
    </textPath>
</text>
`,
    linewrap: `<text font-size="20" y="100">
    Go AngularNYC! Go AngularNYC! Go AngularNYC! Go AngularNYC!
    Go AngularNYC! Go AngularNYC! Go AngularNYC! Go AngularNYC!
    Go AngularNYC! Go AngularNYC!
</text>`,
    foreignObject: `<circle cx="200" cy="200" r="150" fill="pink" stroke="black" stroke-width="20">
</circle>
<foreignObject>
  <h2 style = "width: 300px">
      Go AngularNYC! Go AngularNYC! Go AngularNYC! Go AngularNYC!
      Go AngularNYC! Go AngularNYC! Go AngularNYC! Go AngularNYC!
      Go AngularNYC! Go AngularNYC!
  </h2>
</foreignObject>`,
    attrVsProp: `
      // <rect [x]=123>
      rect.x = 123;

      // <rect [attr.x]=123>
      rect.setAttribute('x',  123);
`,
    createElement: `
      // <text></text>
      document.createElement("text");

      // <svg:text></svg:text>
      document.createElementNS
        ("http://www.w3.org/2000/svg", "text");
`,

    component1: [
      exercise(
        'app.component',
        require('!!raw-loader!./samples/attr/app.component.ts')
      ),
      exercise('app.module', require('!!raw-loader!./samples/app.module.ts')),
      bootstrap('main', builder.bootstrap()),
      stylesheet(require('!!raw-loader!./samples/style.css'))
    ],

    componentAttrs: {
      'app.component.ts': require('!!raw-loader!./samples/attr/app.component.ts'),
      'app.module.ts': require('!!raw-loader!./samples/app.module.ts'),
      'bootstrap.ts': builder.bootstrap(),
      'style.css': require('!!raw-loader!./samples/style.css')
    },

    basicChart: {
      'app.component.ts': require('!!raw-loader!./samples/chart/app.component.ts'),
      'app.module.ts': require('!!raw-loader!./samples/app.module.ts'),
      'bootstrap.ts': builder.bootstrap(),
      'style.css': require('!!raw-loader!./samples/style.css')
    },

    chart2: {
      'ticks.component.ts': require('!!raw-loader!./samples/chart2/ticks.component.ts'),
      'app.component.ts': require('!!raw-loader!./samples/chart2/app.component.ts'),
      'app.module.ts': require('!!raw-loader!./samples/chart2/app.module.ts'),
      'bootstrap.ts': builder.bootstrap(),
      'style.css': require('!!raw-loader!./samples/style.css')
    },

    chart2Solutions: {
      'app.component.ts': require('!!raw-loader!./samples/chart2/app.component.solved.ts')
    },

    chart3: [
      exercise(
        'app.component',
        require('!!raw-loader!./samples/chart4/app.component.ts'),
        require('!!raw-loader!./samples/chart4/app.component.solved.ts')
      ),
      exercise(
        'ticks.component',
        require('!!raw-loader!./samples/chart4/ticks.component.ts')
      ),
      exercise(
        'app.module',
        require('!!raw-loader!./samples/chart4/app.module.ts')
      ),
      bootstrap('main', builder.bootstrap()),
      stylesheet(require('!!raw-loader!./samples/style.css'))
    ]
  };

  constructor() {}
}
