namespace $.$$ {
  export class $etp_procedure_process_person_spaces extends $.$etp_procedure_process_person_spaces {
    @$mol_mem
    space_list() {
      return this.person()
        .spaces_list()
        .map((obj) => this.Space(obj));
    }

    space_id(obj: $etp_procedure_process_space) {
      return obj.land.id();
    }

    space_title(obj: $etp_procedure_process_space) {
      return obj.title() || super.space_title(obj);
    }
  }
}
