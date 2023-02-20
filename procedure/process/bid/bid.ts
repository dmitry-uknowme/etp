namespace $ {
  export class $etp_procedure_process_bid extends $hyoo_crowd_struct {
    @$mol_mem
    title(next?: string) {
      return this.sub("title", $hyoo_crowd_reg).str(next);
    }

    @$mol_mem
    number(next?: string) {
      return this.sub("number", $hyoo_crowd_reg).str(next);
    }

    @$mol_mem
    step(next?: boolean) {
      return this.sub("step", $hyoo_crowd_reg).bool(next);
    }

    @$mol_mem
    status(next?: string) {
      return this.sub("status", $hyoo_crowd_reg).str(next);
    }

    // @$mol_mem
    // owner(next?: $etp_procedure_process_person) {
    //   const str = this.sub("owner", $hyoo_crowd_reg).str(next && next.head);
    //   const id = $mol_int62_string_ensure(str);
    //   return id
    //     ? this.world()?.Fund($etp_procedure_process_person).Item(id)
    //     : null;
    // }
    // @$mol_mem
    // owner(next?: $etp_procedure_process_person) {
    //   const str = this.sub("owner", $hyoo_crowd_reg).str(next && next.head);
    //   const id = $mol_int62_string_ensure(str);
    //   return id
    //     ? this.world()?.Fund($etp_procedure_process_person).Item(id)
    //     : null;
    // }

    @$mol_mem
    send_moment(next?: string) {
      return this.sub("send_moment", $hyoo_crowd_reg).str(next);
    }

    @$mol_mem
    executor(next?: $etp_procedure_process_person) {
      const str = this.sub("executor", $hyoo_crowd_reg).str(next && next.head);
      const id = $mol_int62_string_ensure(str);
      return id
        ? this.world()?.Fund($etp_procedure_process_person).Item(id)
        : null;
    }
  }
}
