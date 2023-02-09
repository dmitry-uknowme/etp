namespace $ {
  export class $etp_procedure_process_space extends $hyoo_crowd_struct {
    @$mol_mem
    title(next?: string) {
      return this.sub("title", $hyoo_crowd_reg).str(next);
    }

    @$mol_mem
    owner(next?: $etp_procedure_process_person) {
      const str = this.sub("owner", $hyoo_crowd_reg).str(next && next.head);
      const id = $mol_int62_string_ensure(str);
      return id
        ? this.world()?.Fund($etp_procedure_process_person).Item(id)
        : null;
    }

    @$mol_mem
    bids_node() {
      return this.sub("bids", $hyoo_crowd_list);
    }

    @$mol_mem
    bid_list() {
      return this.bids_node().nodes($etp_procedure_process_bid);
    }

    @$mol_action
    bid_add() {
      this.sub("bids", $hyoo_crowd_list).insert([{}]);
      const obj = this.bid_list().slice(-1)[0];
      obj.status("NEW");
      //   console.log("nnnn", this.bid_list().length.toString());
      obj.number(this.bid_list().length.toString());
      return obj;
    }

    @$mol_action
    bid_drop(obj: $etp_procedure_process_bid) {
      const index = this.bid_list().indexOf(obj);
      this.sub("bids", $hyoo_crowd_list).cut(index);
    }
  }
}
