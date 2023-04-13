namespace $.$$ {
  export class $etp_procedure_process_widget_info extends $.$etp_procedure_process_widget_info {
    rows(
      rows: { label: string; value: string }[] = []
    ): readonly $etp_procedure_process_widget_row[] {
      return rows.map((row) => this.Row(row));
    }
  }
}
