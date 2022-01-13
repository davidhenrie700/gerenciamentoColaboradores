import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { DialogSuccessComponent } from 'src/app/dialog-success/dialog-success.component';
import { Colaborador } from 'src/app/shared/model/colaborador.model';
import { ColaboradorService } from 'src/app/shared/service/colaborador.service';

@Component({
  selector: 'app-colaboradores-form',
  templateUrl: './colaboradores-form.component.html',
  styleUrls: ['./colaboradores-form.component.css']
})
export class ColaboradoresFormComponent {
    
  colaboradorForm: FormGroup
  enderecoForm: FormGroup


  constructor(private colaboradorService: ColaboradorService,
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params.id),
        switchMap(id => this.colaboradorService.getById(id))
      )
      .subscribe((colaborador) => this.updateForm(colaborador));
      

    this.enderecoForm = this.fb.group({
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });

    this.colaboradorForm = this.fb.group({
      id: [''],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      endereco: this.enderecoForm
    });
  }

  postColaborador() {
    if (this.colaboradorForm.get('id')?.value !== undefined) {
      this.colaboradorService.updateColaborador(this.colaboradorForm.value).subscribe(() => {});
    } else {
      this.colaboradorService.postColaborador(this.colaboradorForm.value).subscribe(() => {});
    }
    this.colaboradorForm.reset()
    this.openDialog()
  };

  updateForm(colaborador: Colaborador) {
    this.enderecoForm.patchValue({
      logradouro: colaborador.endereco.logradouro,
      numero: colaborador.endereco.numero,
      bairro: colaborador.endereco.bairro,
      cep: colaborador.endereco.cep,
      cidade: colaborador.endereco.cidade,
      estado: colaborador.endereco.estado
    });

    this.colaboradorForm.patchValue({
      id: colaborador.id,
      nome: colaborador.nome,
      sobrenome: colaborador.sobrenome,
      cargo: colaborador.cargo,
      dataNascimento: colaborador.dataNascimento,
      endereco: this.enderecoForm
    });
  }

  openDialog() {
    this.dialog.open(DialogSuccessComponent);
  }

  home() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
