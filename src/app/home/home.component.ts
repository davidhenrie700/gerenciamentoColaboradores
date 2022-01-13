import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/shared/model/colaborador.model';
import { ColaboradorService } from 'src/app/shared/service/colaborador.service';
import { DialogDeleteService } from 'src/app/shared/service/dialog-delete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: MatTableDataSource<Colaborador>;
  displayedColumns: string[] = ['id', 'nome', 'cargo', 'dataNascimento', 'endereco', 'bairro', 'cep', 'cidade', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private colaboradorService: ColaboradorService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogDeleteService
    ) {

    this.dataSource = new MatTableDataSource<Colaborador>();
  }

  ngOnInit() {
    this.getColaboradores();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    this.setupFilter();

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setupFilter() {
    this.dataSource.filterPredicate = (d: Colaborador, filter: string) => {
      const textToSearch = d.nome && d.nome.toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  getColaboradores() {
    this.colaboradorService.getColaboradores().subscribe((colaboradores: Colaborador[]) => {
      this.dataSource = new MatTableDataSource<Colaborador>(colaboradores);
    })
  }

  dialogDelete(colaborador: Colaborador) {
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      if(res) {
        this.colaboradorService.deleteColaborador(colaborador.id).subscribe(() => {
          this.getColaboradores()
        })
      }
    })
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }
}
