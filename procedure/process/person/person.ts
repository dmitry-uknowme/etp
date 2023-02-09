namespace $ {
  export enum $etp_procedure_process_person_role {
    ORGANIZER = "ORGANIZER",
    PARTICIPANT = "PARTICIPANT",
  }
  export class $etp_procedure_process_person extends $hyoo_crowd_struct {
    @$mol_mem
    name(next?: string) {
      return this.sub("name", $hyoo_crowd_reg).str(next);
    }

    role(next?: $etp_procedure_process_person_role) {
      return this.sub("role", $hyoo_crowd_reg).str(next?.toString());
    }

    // @ $mol_mem
    // avatar( next?: string ) {
    // 	return this.sub( 'avatar', $hyoo_crowd_reg ).str( next )
    // }

    @$mol_mem
    spaces_node() {
      return this.sub("spaces", $hyoo_crowd_list);
    }

    @$mol_mem
    space_fund() {
      return this.world()!.Fund($etp_procedure_process_space);
    }

    @$mol_mem
    spaces_list() {
      const ids = this.spaces_node().list();
      return ids
        .map((id) => $mol_int62_string_ensure(id))
        .filter($mol_guard_defined)
        .map((id) => this.space_fund().Item(id!));
    }

    @$mol_action
    space_add() {
      const obj = this.space_fund().make();
      this.spaces_node().add(obj.land.id());
      return obj;
    }

    @$mol_action
    space_drop(obj: $etp_procedure_process_space) {
      this.spaces_node().drop(obj.land.id());
    }
  }
}
