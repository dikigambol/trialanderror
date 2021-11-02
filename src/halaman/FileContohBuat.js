<div style={{ padding: '5%' }} >

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
                    <form >
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">NIS :</label><br />
                            <input className="form-control" type="text" id="nis" name="nis" value=""
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">Nama Siswa :</label><br />
                            <input className="form-control" type="text" id="nama" name="nama" value=""
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">Umur :</label><br />
                            <input className="form-control" type="text" id="nama" name="nama" value=""
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">Kelas :</label><br />
                            <input className="form-control" type="text" id="nama" name="nama" value=""
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
                    <form >
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">NIS :</label><br />
                            <input className="form-control" type="text" id="editNis" name="editNis" value=""
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">Nama Siswa :</label><br />
                            <input className="form-control" type="text" id="editNama" name="editNama" value=""
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">Umur :</label><br />
                            <input className="form-control" type="text" id="editUmur" name="editUmur" value=""
                            />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <label htmlFor="fname">Kelas :</label><br />
                            <input className="form-control" type="text" id="editKelas" name="editKelas" value=""
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
            <br />
            <br />
            <div className="table-responsive">
                <table id="" className="display table dt-responsive nowrap table-striped">
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
                        <tr >
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <button className="btn btn-info mr-2"
                                    data-toggle="modal"
                                    data-target="#editMod"
                                >
                                    edit
                                </button>
                                <button className="btn btn-danger"
                                >
                                    hapus
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</div>