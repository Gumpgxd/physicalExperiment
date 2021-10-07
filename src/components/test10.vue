<template>
  <div class="test10">
    <h3>数据记录</h3>
    <div>
      <p>
        数据中给定：K
        <sub>H</sub>=0.173mV / (mA·T)
      </p>
    </div>
    <div class="blank">
      <p>实验仪器编号:</p>
      <el-input type="number" style="width: 20%" v-model="form.number"></el-input>&nbsp;&nbsp;
      <p>线圈常数:</p>
      <el-input type="number" style="width: 20%" v-model="form.constant"></el-input>&nbsp;
      mT/A
    </div>
    <p class="pTitle">
      表1.电磁铁气隙中磁感应强度 B 的分布（ I
      <sub>M</sub>=600MA, I <sub>S</sub>=5.00MA）
    </p>
    <el-table :data="tableData" style="width: 100%" height="450px">
      <el-table-column
        prop="list"
        label="X/mm"
        width="70"
        fixed="left"
      ></el-table-column>

      <el-table-column min-width="110" align="center">
        <template slot="header" slot-scope="scope" width="70">
          <div v-if="scope">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/Ehzt78DxdnoOyMK9bxGnkA9j3cKYmLSe91fmNvMs.png"
              alt="V1/mV"
            />
          </div>
        </template>
        <el-table-column min-width="110" align="center">
          <template slot="header" slot-scope="scope">
            <div v-if="scope">
              <img
                src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/EDGvqk80sGHAtKITyOh1AYJ1GLIzvwKRzuzkhbWf.png"
                alt="+IM/+Is"
              />
            </div>
          </template>
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.num01 == ''" v-model="form.a1"></el-input>
            <el-input type="number" v-if="scope.row.num21 == ''" v-model="form.b1"></el-input>
            <el-input type="number" v-if="scope.row.num41 == ''" v-model="form.c1"></el-input>
            <el-input type="number" v-if="scope.row.num61 == ''" v-model="form.d1"></el-input>
            <el-input type="number" v-if="scope.row.num81 == ''" v-model="form.e1"></el-input>
            <el-input type="number"
              v-if="scope.row.num101 == ''"
              v-model="form.f1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num121 == ''"
              v-model="form.g1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num151 == ''"
              v-model="form.h1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num201 == ''"
              v-model="form.i1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num251 == ''"
              v-model="form.j1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num301 == ''"
              v-model="form.k1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num351 == ''"
              v-model="form.l1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num401 == ''"
              v-model="form.m1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num451 == ''"
              v-model="form.n1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num481 == ''"
              v-model="form.o1"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num501 == ''"
              v-model="form.p1"
            ></el-input>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column min-width="110" align="center">
        <template slot="header" slot-scope="scope">
          <div v-if="scope">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/DXA8Ygdbx8r90qAbZE9C4cdBg3W1up6EGiu9eLtH.png"
              alt="V2/mV"
            />
          </div>
        </template>
        <el-table-column min-width="110" align="center">
          <template slot="header" slot-scope="scope">
            <div v-if="scope">
              <img
                src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/HXRyp7w8QvXa6LbHaAkQoXqh8xRWFhfiTss5EA3o.png"
                alt="+IM/-IS"
              />
            </div>
          </template>
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.num02 == ''" v-model="form.a2"></el-input>
            <el-input type="number" v-if="scope.row.num22 == ''" v-model="form.b2"></el-input>
            <el-input type="number" v-if="scope.row.num42 == ''" v-model="form.c2"></el-input>
            <el-input type="number" v-if="scope.row.num62 == ''" v-model="form.d2"></el-input>
            <el-input type="number" v-if="scope.row.num82 == ''" v-model="form.e2"></el-input>
            <el-input type="number"
              v-if="scope.row.num102 == ''"
              v-model="form.f2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num122 == ''"
              v-model="form.g2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num152 == ''"
              v-model="form.h2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num202 == ''"
              v-model="form.i2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num252 == ''"
              v-model="form.j2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num302 == ''"
              v-model="form.k2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num352 == ''"
              v-model="form.l2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num402 == ''"
              v-model="form.m2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num452 == ''"
              v-model="form.n2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num482 == ''"
              v-model="form.o2"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num502 == ''"
              v-model="form.p2"
            ></el-input>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column min-width="110" align="center">
        <template slot="header" slot-scope="scope">
          <div v-if="scope">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/VttKKcrAVjHYBBZmAI7ammlSC1zMJqF5eWuvfWne.png"
              alt="V3/mV"
            />
          </div>
        </template>
        <el-table-column min-width="110" align="center">
          <template slot="header" slot-scope="scope">
            <div v-if="scope">
              <img
                src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/HLTF27xAyUquqX1mTmuKJocZAUFiQQJ4yMjJHV4J.png"
                alt="-IM/+Is"
              />
            </div>
          </template>
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.num03 == ''" v-model="form.a3"></el-input>
            <el-input type="number" v-if="scope.row.num23 == ''" v-model="form.b3"></el-input>
            <el-input type="number" v-if="scope.row.num43 == ''" v-model="form.c3"></el-input>
            <el-input type="number" v-if="scope.row.num63 == ''" v-model="form.d3"></el-input>
            <el-input type="number" v-if="scope.row.num83 == ''" v-model="form.e3"></el-input>
            <el-input type="number"
              v-if="scope.row.num103 == ''"
              v-model="form.f3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num123 == ''"
              v-model="form.g3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num153 == ''"
              v-model="form.h3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num203 == ''"
              v-model="form.i3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num253 == ''"
              v-model="form.j3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num303 == ''"
              v-model="form.k3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num353 == ''"
              v-model="form.l3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num403 == ''"
              v-model="form.m3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num453 == ''"
              v-model="form.n3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num483 == ''"
              v-model="form.o3"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num503 == ''"
              v-model="form.p3"
            ></el-input>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column min-width="110" align="center">
        <template slot="header" slot-scope="scope">
          <div v-if="scope">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/v2RaxUgrMKZHAs8BlzKdGusPbwLpQSAvjYspdnag.png"
              alt="V4/mV"
            />
          </div>
        </template>
        <el-table-column min-width="110" align="center">
          <template slot="header" slot-scope="scope">
            <div v-if="scope">
              <img
                src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/Hl59IV51EHIJ7ofZrkej3KMmG9RWzGM1jYIi0aIs.png"
                alt="-IM/-IS"
              />
            </div>
          </template>
          <template slot-scope="scope">
            <el-input type="number" v-if="scope.row.num04 == ''" v-model="form.a4"></el-input>
            <el-input type="number" v-if="scope.row.num24 == ''" v-model="form.b4"></el-input>
            <el-input type="number" v-if="scope.row.num44 == ''" v-model="form.c4"></el-input>
            <el-input type="number" v-if="scope.row.num64 == ''" v-model="form.d4"></el-input>
            <el-input type="number" v-if="scope.row.num84 == ''" v-model="form.e4"></el-input>
            <el-input type="number"
              v-if="scope.row.num104 == ''"
              v-model="form.f4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num124 == ''"
              v-model="form.g4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num154 == ''"
              v-model="form.h4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num204 == ''"
              v-model="form.i4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num254 == ''"
              v-model="form.j4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num304 == ''"
              v-model="form.k4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num354 == ''"
              v-model="form.l4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num404 == ''"
              v-model="form.m4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num454 == ''"
              v-model="form.n4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num484 == ''"
              v-model="form.o4"
            ></el-input>
            <el-input type="number"
              v-if="scope.row.num504 == ''"
              v-model="form.p4"
            ></el-input>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="name" min-width="180">
        <template slot="header" slot-scope="scope">
          <div v-if="scope">
            <img
              src="https://isekko-1306311182.cos.ap-nanjing.myqcloud.com/art/cLToenhKTSkGNHcOG2HpZWbXsICK5USexOj8ZRjR.png"
              alt="VH=1/4(|v1|+|v2|+|v3|+|v4|)"
            />
          </div>
        </template>
        <template slot-scope="scope">
          <el-input type="number" v-if="scope.row.num0h == ''" v-model="form.a5"></el-input>
          <el-input type="number" v-if="scope.row.num2h == ''" v-model="form.b5"></el-input>
          <el-input type="number" v-if="scope.row.num4h == ''" v-model="form.c5"></el-input>
          <el-input type="number" v-if="scope.row.num6h == ''" v-model="form.d5"></el-input>
          <el-input type="number" v-if="scope.row.num8h == ''" v-model="form.e5"></el-input>
          <el-input type="number" v-if="scope.row.num10h == ''" v-model="form.f5"></el-input>
          <el-input type="number" v-if="scope.row.num12h == ''" v-model="form.g5"></el-input>
          <el-input type="number" v-if="scope.row.num15h == ''" v-model="form.h5"></el-input>
          <el-input type="number" v-if="scope.row.num20h == ''" v-model="form.i5"></el-input>
          <el-input type="number" v-if="scope.row.num25h == ''" v-model="form.j5"></el-input>
          <el-input type="number" v-if="scope.row.num30h == ''" v-model="form.k5"></el-input>
          <el-input type="number" v-if="scope.row.num35h == ''" v-model="form.l5"></el-input>
          <el-input type="number" v-if="scope.row.num40h == ''" v-model="form.m5"></el-input>
          <el-input type="number" v-if="scope.row.num45h == ''" v-model="form.n5"></el-input>
          <el-input type="number" v-if="scope.row.num48h == ''" v-model="form.o5"></el-input>
          <el-input type="number" v-if="scope.row.num50h == ''" v-model="form.p5"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="B/mT" min-width="120">
        <template slot-scope="scope">
          <el-input type="number" v-if="scope.row.num0b == ''" v-model="form.a6"></el-input>
          <el-input type="number" v-if="scope.row.num2b == ''" v-model="form.b6"></el-input>
          <el-input type="number" v-if="scope.row.num4b == ''" v-model="form.c6"></el-input>
          <el-input type="number" v-if="scope.row.num6b == ''" v-model="form.d6"></el-input>
          <el-input type="number" v-if="scope.row.num8b == ''" v-model="form.e6"></el-input>
          <el-input type="number" v-if="scope.row.num10b == ''" v-model="form.f6"></el-input>
          <el-input type="number" v-if="scope.row.num12b == ''" v-model="form.g6"></el-input>
          <el-input type="number" v-if="scope.row.num15b == ''" v-model="form.h6"></el-input>
          <el-input type="number" v-if="scope.row.num20b == ''" v-model="form.i6"></el-input>
          <el-input type="number" v-if="scope.row.num25b == ''" v-model="form.j6"></el-input>
          <el-input type="number" v-if="scope.row.num30b == ''" v-model="form.k6"></el-input>
          <el-input type="number" v-if="scope.row.num35b == ''" v-model="form.l6"></el-input>
          <el-input type="number" v-if="scope.row.num40b == ''" v-model="form.m6"></el-input>
          <el-input type="number" v-if="scope.row.num45b == ''" v-model="form.n6"></el-input>
          <el-input type="number" v-if="scope.row.num48b == ''" v-model="form.o6"></el-input>
          <el-input type="number" v-if="scope.row.num50b == ''" v-model="form.p6"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <p>根据上表所记录数据，做出电磁铁气隙中磁感应强度 X-B 曲线</p>
    <div class="upPic">
      <el-upload
        class="upload-demo"
        drag
        action="http://art.aztop.cn/api/uppic/uppic"
        multiple
        :on-success="picSuccess"
        :show-file-list="false"
        accept=".png, .jpg, .jpeg"
      >
        <img
          v-if="form.pic_file"
          :src="form.pic_file"
          style="background-size: 'contain'"
          :v-model="form.tu"
        />
        <i v-if="form.pic_file == ''" class="el-icon-upload"></i>
        <div class="el-upload__text" v-if="form.pic_file == ''">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">请上传您的文件！</div>
      </el-upload>
    </div>
    <h4>思考题（每题5分，一共10分）</h4>
    <p>
      1.若磁感应强度 B 与元件平面法线存在角度 α
      时，作用在元件上的有效磁场大小为：( )
    </p>
    <el-radio-group v-model="form.xz1">
      <el-radio label="A" style="padding: 0 0 15px 0">A. Bcosα</el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">B. Bsinα</el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C. Btanα</el-radio>
      <el-radio label="D">D. Bcotα</el-radio>
    </el-radio-group>
    <p>
      2. 若磁感应强度 B 与工作电流方向存在角度 β
      时，作用在元件上的有效磁场大小为：( )
    </p>
    <el-radio-group v-model="form.xz2">
      <el-radio label="A" style="padding: 0 0 15px 0">A. Bsinβ</el-radio>
      <el-radio label="B" style="padding: 0 0 15px 0">B. Bcosβ</el-radio>
      <el-radio label="C" style="padding: 0 0 15px 0">C. Btanβ</el-radio>
      <el-radio label="D">D. Bcotβ</el-radio>
    </el-radio-group>
    <div class="btn10">
      <el-button type="primary" @click="send()">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        pic_file: "",
        number: "",
        constant: "",
        student_id: "",
        // 第一列
        a1: "",
        b1: "",
        c1: "",
        d1: "",
        e1: "",
        f1: "",
        g1: "",
        h1: "",
        i1: "",
        j1: "",
        k1: "",
        l1: "",
        m1: "",
        n1: "",
        o1: "",
        p1: "",
        // 第二列
        a2: "",
        b2: "",
        c2: "",
        d2: "",
        e2: "",
        f2: "",
        g2: "",
        h2: "",
        i2: "",
        j2: "",
        k2: "",
        l2: "",
        m2: "",
        n2: "",
        o2: "",
        p2: "",
        // 第三列
        a3: "",
        b3: "",
        c3: "",
        d3: "",
        e3: "",
        f3: "",
        g3: "",
        h3: "",
        i3: "",
        j3: "",
        k3: "",
        l3: "",
        m3: "",
        n3: "",
        o3: "",
        p3: "",
        // 第四列
        a4: "",
        b4: "",
        c4: "",
        d4: "",
        e4: "",
        f4: "",
        g4: "",
        h4: "",
        i4: "",
        j4: "",
        k4: "",
        l4: "",
        m4: "",
        n4: "",
        o4: "",
        p4: "",
        // 第五列
        a5: "",
        b5: "",
        c5: "",
        d5: "",
        e5: "",
        f5: "",
        g5: "",
        h5: "",
        i5: "",
        j5: "",
        k5: "",
        l5: "",
        m5: "",
        n5: "",
        o5: "",
        p5: "",
        // 第六列
        a6: "",
        b6: "",
        c6: "",
        d6: "",
        e6: "",
        f6: "",
        g6: "",
        h6: "",
        i6: "",
        j6: "",
        k6: "",
        l6: "",
        m6: "",
        n6: "",
        o6: "",
        p6: "",
        // 选择判断
        xz1: "",
        xz2: "",
        tu: "",
        // 图分数
        // fraction: "",
        grade_xp: "",
      },

      tableData: [
        {
          // list是第一列数据
          list: "0",
          // v1:"",
          // 01是第一行（0）第一列的数据
          num01: "",
          num02: "",
          num03: "",
          num04: "",
          num0h: "",
          num0b: "",
        },
        {
          list: "2",
          num21: "",
          num22: "",
          num23: "",
          num24: "",
          num2h: "",
          num2b: "",
        },
        {
          list: "4",
          num41: "",
          num42: "",
          num43: "",
          num44: "",
          num4h: "",
          num4b: "",
        },
        {
          list: "6",
          num61: "",
          num62: "",
          num63: "",
          num64: "",
          num6h: "",
          num6b: "",
        },
        {
          list: "8",
          num81: "",
          num82: "",
          num83: "",
          num84: "",
          num8h: "",
          num8b: "",
        },
        {
          list: "10",
          num101: "",
          num102: "",
          num103: "",
          num104: "",
          num10h: "",
          num10b: "",
        },
        {
          list: "12",
          num121: "",
          num122: "",
          num123: "",
          num124: "",
          num12h: "",
          num12b: "",
        },
        {
          list: "15",
          num151: "",
          num152: "",
          num153: "",
          num154: "",
          num15h: "",
          num15b: "",
        },
        {
          list: "20",
          num201: "",
          num202: "",
          num203: "",
          num204: "",
          num20h: "",
          num20b: "",
        },
        {
          list: "25",
          num251: "",
          num252: "",
          num253: "",
          num254: "",
          num25h: "",
          num25b: "",
        },
        {
          list: "30",
          num301: "",
          num302: "",
          num303: "",
          num304: "",
          num30h: "",
          num30b: "",
        },
        {
          list: "35",
          num351: "",
          num352: "",
          num353: "",
          num354: "",
          num35h: "",
          num35b: "",
        },
        {
          list: "40",
          num401: "",
          num402: "",
          num403: "",
          num404: "",
          num40h: "",
          num40b: "",
        },
        {
          list: "45",
          num451: "",
          num452: "",
          num453: "",
          num454: "",
          num45h: "",
          num45b: "",
        },
        {
          list: "48",
          num481: "",
          num482: "",
          num483: "",
          num484: "",
          num48h: "",
          num48b: "",
        },
        {
          list: "50",
          num501: "",
          num502: "",
          num503: "",
          num504: "",
          num50h: "",
          num50b: "",
        },
      ],
    };
  },
  created() {
    this.form.student_id = window.sessionStorage.getItem("student_id");
  },
  methods: {
    arraySpanMethod(columnIndex) {
      if (columnIndex == 0) {
        return [2, 1];
      }
    },
    picSuccess(res, file) {
      if (res.code == 200) {
        this.form.pic_file = res.data;
        this.form.tu = res.data;
      } else {
        this.$message.error("图片上传失败，请重新上传!!");
      }
      // console.log(res);
      // console.log(this.form.tu);
      // console.log(this.form.pic_file);
    },
    async send() {
      const answer1 = (this.form.xz1 + this.form.xz2).split("");
      const answer2 = ["A", "A"];
      var mark = 0;
      for (let i = 0; i < answer1.length; i++) {
        if (answer1[i] == answer2[i]) {
          mark += 5;
        }
      }
      this.form.grade_xp = mark;
      // console.log(this.form);
      const { data: res } = await this.$http.post(
        "/api/experiment9/completion9",
        this.form
      );
      // console.log(res);
      if (res.code == 200) {
        this.$message.success('上传成功！')
        this.$router.replace('/login')
      } else {
        this.$message.error(res.msg);
      }
    },
  },
};
</script>
<style scoped>
.test10 {
  height: 100%;
  width: 50%;
  min-width: 320px;
  margin: 0 auto;
}
p {
  font-size: 15px;
  line-height: 24px;
}
.blank {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pTitle {
  font-size: 13px;
}
.upPic {
  text-align: center;
  width: 360px;
  height: 180px;
  margin: 0 auto;
  margin-bottom: 50px;
}
.upload-demo img {
  width: 360px;
  height: 180px;
}
.btn10 {
  margin-top: 25px;
  padding-bottom: 30px;
  margin: 25px auto 0;
  text-align: center;
  background-color: white;
}
</style>