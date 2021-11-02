import React from 'react';

function TestPDF() {
    return (
        <div className="page">
            <div id="tulisan" style={{ marginBottom: '30px' }}>
                <img src="/logo.png" className='center' style={{ marginBottom: '10px' }}></img>
                <p className='times' style={{ fontWeight: 'bold', fontSize: '13pt', textAlign: 'center' }}>
                    INSTITUT TEKNOLOGI DAN BISNIS ASIA MALANG
                </p>
                <p className='times' style={{ fontWeight: 'bold', fontSize: '13pt', textAlign: 'center', marginTop: '-17px' }}>
                    FAKULTAS TEKNOLOGI DAN DESAIN
                </p>
                <p className='times' style={{ fontSize: '12pt', textAlign: 'center', marginTop: '-17px' }}>
                    Jl. Soekarno-Hatta, Rembuksari 1A Malang Telp.(0341) 478877 Fax.(0341) 4345225
                </p>
                <div style={{ borderBottom: '1px solid grey', marginLeft: '20px', marginRight: '20px' }}></div>
            </div>
            <p className='times' style={{ fontWeight: 'bold', fontSize: '13pt', textAlign: 'center', marginTop: '-10px' }}>KARTU HASIL STUDI</p>

            <div style={{ padding: '5px 17px 0 17px' }}>
                <table style={{ width: "100%" }}>
                    <thead></thead>
                    <tbody className='times' style={{ fontSize: '11.5pt' }}>
                        <tr>
                            <td>Nama</td>
                            <td> : </td>
                            <td>Gambol Widodo Saputra Alamak Ji Alamak</td>

                            <td>Tahun Angkatan</td>
                            <td> : </td>
                            <td>2002</td>
                        </tr>
                        <tr>
                            <td>NIM</td>
                            <td> : </td>
                            <td>1920019</td>

                            <td>Tahun Akademik</td>
                            <td> : </td>
                            <td>2020/2021</td>
                        </tr>
                        <tr>
                            <td>Program Studi</td>
                            <td> : </td>
                            <td>Teknik Informatika</td>

                            <td>Semester</td>
                            <td> : </td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>

                <table width="100%" align="center" cellPadding={5} border={1} style={{ marginTop: '25px' }}>
                    <tbody className='times' style={{ fontSize: '10.5pt' }}>
                        <tr align="center" height={10}>
                            <td scope="row"><strong>No</strong></td>
                            <td colSpan={2}><strong>Kode MK </strong></td>
                            <td colSpan={2}><strong>Mata Kuliah </strong></td>
                            <td><strong>SKS</strong></td>
                            <td><strong>Nilai</strong></td>
                            <td><strong>Huruf</strong></td>
                            <td><strong>sks x N </strong></td>
                        </tr>
                        <tr height={10}>
                            <td align="center" scope="row">1</td>
                            <td colSpan={2} align="center"><a title="Pengembangan Game (3 sks)">MPKB-TI 04</a></td>
                            <td colSpan={2}>&nbsp; Pengembangan Game</td>
                            <td align="center">3</td>
                            <td align="center" />
                            <td align="center">E</td>
                            <td align="center">0</td>
                        </tr>
                        <tr height={10}>
                            <td align="center" scope="row">2</td>
                            <td colSpan={2} align="center"><a title="Metode Penelitian (3 sks)">MUT-TI 18</a></td>
                            <td colSpan={2}>&nbsp; Metode Penelitian</td>
                            <td align="center">3</td>
                            <td align="center" />
                            <td align="center">E</td>
                            <td align="center">0</td>
                        </tr>
                        <tr height={10}>
                            <td align="center" scope="row">3</td>
                            <td colSpan={2} align="center"><a title="Proyek Multimedia dan Game (3 sks)">MPKB-TI 08</a></td>
                            <td colSpan={2}>&nbsp; Proyek Multimedia dan Game</td>
                            <td align="center">3</td>
                            <td align="center" />
                            <td align="center">E</td>
                            <td align="center">0</td>
                        </tr>
                        <tr height={10}>
                            <td align="center" scope="row">4</td>
                            <td colSpan={2} align="center"><a title="KM1 (3 sks)">19TI-KM1</a></td>
                            <td colSpan={2}>&nbsp; KM1</td>
                            <td align="center">3</td>
                            <td align="center" />
                            <td align="center">E</td>
                            <td align="center">0</td>
                        </tr>
                        <tr height={10}>
                            <td colSpan={5} align="left">&nbsp;<b>Total</b></td>
                            <td align="center">&nbsp;<b>12</b></td>
                            <td align="center">&nbsp;-</td>
                            <td align="center">&nbsp;-</td>
                            <td align="center">&nbsp;<b>0</b></td>
                        </tr>
                        <tr height={10}>
                            <td colSpan={5} align="center">&nbsp;<b>IP Semester</b></td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;<strong>0.00</strong></td>
                        </tr>
                        <tr height={10}>
                            <td colSpan={5} align="center">&nbsp;<b>IP Kumulatif</b></td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;<strong>0.00</strong></td>
                        </tr>
                        <tr height={10}>
                            <td colSpan={5} align="center">&nbsp;<b>SKS Yang Telah Lulus</b></td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;<strong>81</strong></td>
                        </tr>
                        <tr height={10}>
                            <td colSpan={5} align="center"><b>Beban Maksimal SKS Semester Depan</b></td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;</td>
                            <td align="center">&nbsp;<strong>15</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div className='row' style={{ marginTop: '35px' }}>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center' }}>Malang, 2 November 2021</p>
                    </div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>Mengetahui,</p>
                    </div>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>
                            Kepala Program Studi
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>
                            Dosen Wali
                        </p>
                    </div>
                    <div className='col-md-12' style={{ marginBottom: '60px' }}></div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>
                            <u>JAENAL ARIFIN , S.Kom. M.M. , M.Kom</u>
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>
                            <u>MOHAMMAD ZAINUDDIN S.Si, M.Kom</u>
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>
                            NIDN.0709117502
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <p className='times' style={{ fontSize: '11.5pt', textAlign: 'center', marginTop: '-15px' }}>
                            NIDN.0725077105
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestPDF;