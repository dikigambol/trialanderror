import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

function Siswa() {

    const [nis, setNis] = useState('');
    const [editNis, setEditNis] = useState('');
    const [nama, setNama] = useState('');
    const [editNama, setEditNama] = useState('');
    const [umur, setUmur] = useState('');
    const [editUmur, setEditUmur] = useState('');
    const [kelas, setKelas] = useState('');
    const [editKelas, setEditKelas] = useState('');

    const [siswaData, setSiswaData] = useState([]);

    const [siswaId, setSiswaId] = useState('');

    useEffect(() => {
        const firestore = firebase.database().ref("/DataSiswa");
        firestore.on('value', (response) => {
            const data = response.val();
            let SiswaList = [];
            for (let id in data) {
                SiswaList.push({
                    id: id,
                    Nis: data[id].Nis,
                    Nama: data[id].Nama,
                    Umur: data[id].Umur,
                    Kelas: data[id].Kelas,
                });
            }
            setSiswaData(SiswaList)
        });
    }, []);

    const handleFormSumbit = (e) => {
        e.preventDefault();
        const firestore = firebase.database().ref("/DataSiswa");
        let data = {
            Nis: nis,
            Nama: nama,
            Umur: umur,
            Kelas: kelas,
        }
        firestore.push(data);
        setNis("");
        setNama("");
        setUmur("");
        setKelas("");
    }

    const handleEditKlik = (data) => {
        setEditNis(data.Nis);
        setEditNama(data.Nama);
        setEditUmur(data.Umur);
        setEditKelas(data.Kelas);
        setSiswaId(data.id);
    }

    const handleEditForm = (e) => {
        e.preventDefault();
        const firestore = firebase.database().ref("/DataSiswa").child(siswaId);
        firestore.update({
            Nis: editNis,
            Nama: editNama,
            Umur: editUmur,
            Kelas: editKelas,
        })
        setEditNis("");
        setEditNama("");
        setEditUmur("");
        setEditKelas("");
    }

    const handleHapusKlik = (id) => {
        const firestore = firebase.database().ref("/DataSiswa").child(id);
        firestore.remove();
    }

    const print = () => {

        html2canvas(document.querySelector("#tulisan")).then(canvas => {
            document.body.appendChild(canvas);
            const imgData = canvas.toDataURL('image/png');
            const doc = new jsPDF();
            doc.addImage(imgData, 'PNG', -57, 10);
            doc.autoTable({ html: '#siswaTabel' })
            doc.save('table.pdf');
        });

    }

    return (
        <div style={{ padding: '5%' }} >

            <div id="tulisan" style={{marginBottom: '30px'}}>
                <img src="/logo.png"></img>
                <p style={{fontWeight: 'bold', fontSize: '14pt', textAlign: 'center'}}>
                    INSTITUT TEKNOLOGI DAN BISNIS ASIA MALANG
                </p>
                <p style={{fontSize: '12pt', textAlign: 'center', marginTop: '-12px'}}>
                    Jl. Soekarno-Hatta, Rembuksari 1A Malang Telp.(0341) 478877 Fax.(0341) 4345225
                </p>
                <hr></hr>
            </div>

            {/* Modal tambah*/}
            <div className="modal fade" id="tambahMod" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Tambah Anggota</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleFormSumbit}>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">NIS :</label><br />
                                    <input className="form-control" type="text" id="nis" name="nis" value={nis}
                                        onChange={(e) => { setNis(e.target.value) }}
                                    />
                                </div>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">Nama Siswa :</label><br />
                                    <input className="form-control" type="text" id="nama" name="nama" value={nama}
                                        onChange={(e) => { setNama(e.target.value) }}
                                    />
                                </div>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">Umur :</label><br />
                                    <input className="form-control" type="text" id="nama" name="nama" value={umur}
                                        onChange={(e) => { setUmur(e.target.value) }}
                                    />
                                </div>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">Kelas :</label><br />
                                    <input className="form-control" type="text" id="nama" name="nama" value={kelas}
                                        onChange={(e) => { setKelas(e.target.value) }}
                                    />
                                </div>
                                <br />
                                <input type="submit" className="btn btn-primary float-right" defaultValue="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* end modal tambah  */}

            {/* Modal edit*/}
            <div className="modal fade" id="editMod" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Data Anggota</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleEditForm}>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">NIS :</label><br />
                                    <input className="form-control" type="text" id="editNis" name="editNis" value={editNis}
                                        onChange={(e) => { setEditNis(e.target.value) }}
                                    />
                                </div>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">Nama Siswa :</label><br />
                                    <input className="form-control" type="text" id="editNama" name="editNama" value={editNama}
                                        onChange={(e) => { setEditNama(e.target.value) }}
                                    />
                                </div>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">Umur :</label><br />
                                    <input className="form-control" type="text" id="editUmur" name="editUmur" value={editUmur}
                                        onChange={(e) => { setEditUmur(e.target.value) }}
                                    />
                                </div>
                                <div style={{ margin: '10px' }}>
                                    <label htmlFor="fname">Kelas :</label><br />
                                    <input className="form-control" type="text" id="editKelas" name="editKelas" value={editKelas}
                                        onChange={(e) => { setEditKelas(e.target.value) }}
                                    />
                                </div>
                                <br />
                                <input type="submit" className="btn btn-primary float-right" defaultValue="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* end modal edit  */}


            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center">Data Siswa</h2>
                    <br />
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#tambahMod">
                        + tambah siswa
                    </button>

                    <button className="btn btn-primary ml-2" onClick={print}>
                        print
                    </button>
                    <br />
                    <br />
                    {siswaData.length == 0 ? (
                        <div className='container mt-3 mb-1'>
                            <h4 style={{ textAlign: 'center' }}><b>tidak ada data</b></h4>
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table id="siswaTabel" className="display table dt-responsive nowrap table-striped">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>NIS</th>
                                        <th>Nama siswa</th>
                                        <th>Umur</th>
                                        <th>Kelas</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        siswaData.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        {index + 1}
                                                    </td>
                                                    <td>
                                                        {data.Nis}
                                                    </td>
                                                    <td>
                                                        {data.Nama}
                                                    </td>
                                                    <td>
                                                        {data.Umur}
                                                    </td>
                                                    <td>
                                                        {data.Kelas}
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-info mr-2"
                                                            data-toggle="modal"
                                                            data-target="#editMod"
                                                            onClick={() => { handleEditKlik(data) }}
                                                        >
                                                            edit
                                                        </button>
                                                        <button className="btn btn-danger"
                                                            onClick={() => { handleHapusKlik(data.id) }}
                                                        >
                                                            hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Siswa;