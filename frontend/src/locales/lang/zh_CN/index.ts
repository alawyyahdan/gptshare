import componentsLocale from 'tdesign-vue-next/es/locale/zh_CN';

import components from './components';
import layout from './layout';
import pages from './pages';

export default {
  lang: 'Bahasa Indonesia',
  layout,
  pages,
  components,
  constants: {
    contract: {
      name: 'Nama Kontrak',
      status: 'Status Kontrak',
      num: 'Nomor Kontrak',
      type: 'Jenis Kontrak',
      typePlaceholder: 'Masukkan jenis',
      payType: 'Jenis Kontrak Penerimaan dan Pengeluaran',
      amount: 'Jumlah Kontrak',
      amountPlaceholder: 'Masukkan jumlah',
      signDate: 'Tanggal Penandatanganan Kontrak',
      effectiveDate: 'Tanggal Mulai Berlaku Kontrak',
      endDate: 'Tanggal Berakhir Kontrak',
      createDate: 'Waktu Pembuatan Kontrak',
      company: 'Pihak Pertama',
      employee: 'Pihak Kedua',
      pay: 'Bayar',
      receive: 'Terima',
      remark: 'Catatan',
      attachment: 'Lampiran',
      statusOptions: {
        fail: 'Audit Gagal',
        auditPending: 'Menunggu Audit',
        execPending: 'Menunggu Pelaksanaan',
        executing: 'Audit Berhasil',
        finish: 'Selesai',
      },
      typeOptions: {
        main: 'Kontrak Utama',
        sub: 'Kontrak Turunan',
        supplement: 'Kontrak Tambahan',
      },
    },
  },
  componentsLocale,
};