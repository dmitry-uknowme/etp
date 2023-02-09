namespace $.$$ {
  export class $etp_procedure_process_space_bids_table extends $.$etp_procedure_process_space_bids_table {
    bid_statuses(): readonly string[] {
      return ["NEW", "ACCEPTED", "WINNER"];
    }

    bid_status(obj: $etp_procedure_process_bid, next?: string): string {
      return obj.status(next);
    }

    @$mol_mem
    bid_list() {
      return this.space()
        .bid_list()
        .map((obj) => this.Bid(obj));
    }

    bid_title(obj: $etp_procedure_process_bid, next?: string) {
      return obj.title(next);
    }

    bid_number(obj: $etp_procedure_process_bid, next?: string): string {
      return obj.number(next);
    }
  }
}
