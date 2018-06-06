<template>
  <!-- $t is vue-i18n global function to translate lang -->
  <div class="app-container">
    <el-input style='width:340px;' placeholder="请输入文件名(默认excel-list)" prefix-icon="el-icon-document" v-model="filename"></el-input>
    <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出 excel</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='Id' width="95">
        <template slot-scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{scope.row.author}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  //import { fetchList } from '@/API/article'
  import { parseTime } from '@/utils'

  export default {
    name: 'exportExcel',
    data() {
      return {
        list: null,
        listLoading: true,
        downloadLoading: false,
        filename: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true;
        setTimeout(()=>{
          this.list = [{"id":1,"timestamp":955674595142,"author":"Shirley","reviewer":"Donna","title":"Cmakn Dfifl Vrooymy Jxvsx Yurgbeggk Ttwc Xutfk Joyktel","forecast":29.65,"importance":2,"type":"CN","status":"draft","display_time":"1982-08-26 00:13:37","pageviews":2855},{"id":2,"timestamp":603375319973,"author":"Deborah","reviewer":"Sandra","title":"Qpab Kpofr Shqijx Mas Ijphq Vklie","forecast":22.56,"importance":2,"type":"JP","status":"draft","display_time":"1972-03-30 17:19:49","pageviews":2695},{"id":3,"timestamp":1353892296889,"author":"Jose","reviewer":"Michael","title":"Pekvqy Wcgr Cnsmddb Ighgcc Jrpkfvm Bdxioig Tbxxqicps Bvch Inq","forecast":15.98,"importance":2,"type":"EU","status":"published","display_time":"2004-06-28 11:14:05","pageviews":4780},{"id":4,"timestamp":299003198264,"author":"Eric","reviewer":"Angela","title":"Fsydwmm Mfebphi Muqhx Gkjdpo Nfuikrje Wbwvmvtlfw Cdpdzsq Ctvasf Pmqvxfunww","forecast":88.67,"importance":2,"type":"JP","status":"draft","display_time":"1981-08-01 04:30:03","pageviews":4011},{"id":5,"timestamp":101956836461,"author":"Kimberly","reviewer":"Thomas","title":"Lmrzsncrwg Mtrmdxud Gqkvc Epfedpjt Gylmwepqr","forecast":89.28,"importance":2,"type":"JP","status":"published","display_time":"2010-12-22 09:18:57","pageviews":3526},{"id":6,"timestamp":1255372393705,"author":"Mark","reviewer":"Betty","title":"Rbknv Rpdwtho Pcxoixxvm Udskesoasz Aftrbk Mmbqiypvl Kcgiftauy Msvnqnimq Bbvvyh","forecast":29.24,"importance":1,"type":"JP","status":"published","display_time":"2017-07-05 22:23:03","pageviews":3471},{"id":7,"timestamp":1175761978056,"author":"Brian","reviewer":"Larry","title":"Hxvjsjxk Iwdnpb Ivda Mxvgke Yzkectxe Thqojqznb","forecast":50.28,"importance":2,"type":"JP","status":"draft","display_time":"1981-05-21 11:36:34","pageviews":4369},{"id":8,"timestamp":1410464560994,"author":"Helen","reviewer":"Jose","title":"Diwnhjs Bgrurj Pzcqy Gtoefqmw Barftb Yvhjrj Rsiyod Cxbxiy Bdppluqyar","forecast":73.85,"importance":2,"type":"CN","status":"deleted","display_time":"1990-12-28 13:21:26","pageviews":4166},{"id":9,"timestamp":31886892019,"author":"Christopher","reviewer":"Frank","title":"Jukgtnoif Kjkn Lyojxdw Xaytqbm Rud Dgjwofqji Bixkq","forecast":60.12,"importance":1,"type":"JP","status":"deleted","display_time":"1988-01-29 09:24:15","pageviews":3616},{"id":10,"timestamp":416066016873,"author":"Angela","reviewer":"Christopher","title":"Nqpsmqft Pruakw Toyhtx Oqrtuzcvwq Dfbjksc Auunyrc","forecast":96.71,"importance":2,"type":"JP","status":"deleted","display_time":"1991-12-22 08:08:33","pageviews":1987},{"id":11,"timestamp":850920320906,"author":"Steven","reviewer":"Deborah","title":"Anpmhc Resdbe Oexrkmg Qzgtj Mxqggj Pjmt Hdwdk Fpgmvdydy Uzifo","forecast":100.57,"importance":3,"type":"US","status":"published","display_time":"1992-08-28 10:19:13","pageviews":4149},{"id":12,"timestamp":613872312958,"author":"Sarah","reviewer":"Laura","title":"Nir Cljci Vmbejz Egxyentw Wqoj Abps Uhbs Hhowzne","forecast":48.68,"importance":1,"type":"US","status":"draft","display_time":"1970-01-09 03:56:57","pageviews":1420},{"id":13,"timestamp":163819865460,"author":"Helen","reviewer":"Scott","title":"Bvwdasq Rca Icmgdph Sbpf Dwok","forecast":69.85,"importance":2,"type":"US","status":"published","display_time":"1998-07-15 10:54:33","pageviews":3657},{"id":14,"timestamp":779249661969,"author":"Karen","reviewer":"Sarah","title":"Lpb Tuhbe Tbixopxhep Gqrylt Idcrcevl Ryhq Pnfeu","forecast":83.32,"importance":2,"type":"US","status":"deleted","display_time":"2007-03-14 16:13:41","pageviews":1665},{"id":15,"timestamp":1161188579530,"author":"Matthew","reviewer":"Frank","title":"Drmdvhrax Kfxxxdxf Syu Ijragbj Msgh Vsqrhwm","forecast":55.38,"importance":1,"type":"EU","status":"draft","display_time":"1975-07-18 06:16:48","pageviews":2118},{"id":16,"timestamp":911880271115,"author":"Lisa","reviewer":"Susan","title":"Vukh Nxikwn Spccts Vgikibwiv Vdmxjlpgs Qorg Szdvyhmdw Cpieiqi Irxymydu","forecast":11.08,"importance":2,"type":"CN","status":"draft","display_time":"1990-10-07 21:49:51","pageviews":420},{"id":17,"timestamp":714622338139,"author":"Shirley","reviewer":"Shirley","title":"Rldi Mzclphr Wezgfuuwfg Ghbjnh Rcuwa Afjopvila Qcf Lkkdww Wsyf Wjupncbvm","forecast":71.93,"importance":1,"type":"JP","status":"published","display_time":"1977-06-23 13:56:41","pageviews":464},{"id":18,"timestamp":1193705696139,"author":"Angela","reviewer":"Jeffrey","title":"Drmyvwo Uyujlvq Rjtd Tea Bmg Mdyfvur Xjuvu Xwlcxhjnt","forecast":98.16,"importance":2,"type":"JP","status":"deleted","display_time":"1970-04-27 06:48:54","pageviews":4204},{"id":19,"timestamp":1310130810275,"author":"Sarah","reviewer":"Gary","title":"Txnxecqc Vavddowf Lfjkrrfb Hohs Aqhgbq Qnulj Wqndipujtn Cgm Gpdn","forecast":99.23,"importance":2,"type":"EU","status":"deleted","display_time":"1981-05-20 05:17:28","pageviews":1674},{"id":20,"timestamp":1307728822087,"author":"Donald","reviewer":"Karen","title":"Shgclufyy Wzgzbmyhl Kwiwvn Vdnq Xrvsg Rbtdwl Gypuzx Bbxymujp Lykixopqk Xvdavehp","forecast":30.17,"importance":3,"type":"CN","status":"draft","display_time":"2017-10-21 05:44:39","pageviews":3261}]
          this.listLoading = false
        },1000);
        /*fetchList().then(response => {
          this.list = response.data.items
          this.listLoading = false
        })*/
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel/Export2Excel').then(excel => {
          const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
          const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
          const list = this.list
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel(tHeader, data, this.filename)
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      }
    }
  }
</script>
